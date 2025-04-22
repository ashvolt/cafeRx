import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, from, timer } from 'rxjs';
import { scan, map, tap, mergeMap, takeUntil } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ShopService {
    shopStatus$ = new BehaviorSubject('Closed');
    dineInOrders$ = new Subject<any>();
    takeAwayOrders$ = new Subject<any>();
    completedOrders$ = new Subject<any>();
    refundedOrders$ = new Subject<any>();
    assignments: Record<string, string> = {};
    logs: string[] = [];
    employeeEffort: Record<string, number> = {};
    revenue$ = this.completedOrders$.pipe(scan((acc, o) => acc + o.amount, 0));
    allEmployees = ['Alice', 'Bob', 'Charlie', 'David', 'Eva'];
    employees: string[] = [];
    customers = ['John', 'Emma', 'Liam', 'Olivia', 'Mia', 'Noah', 'Sophia'];
    maxWaitTime = 10000;
    currentOrders: any[] = [];
    menuItems: { name: string; prepTime: number; price: number; quantity: number }[] = [];
  
    configureEmployees(selected: string[]) {
      this.employees = selected;
    }
  
    configureMenu(menu: { name: string; prepTime: number; price: number; quantity: number }[]) {
      this.menuItems = menu;
    }
  
    openShop() {
      this.shopStatus$.next('Open');
      let customerIndex = 0;
  
      from(this.customers).pipe(
        mergeMap((customer, i) =>
          timer(i * 1000).pipe(
            map(() => {
              let menu;
              do {
                menu = this.menuItems[Math.floor(Math.random() * this.menuItems.length)];
              } while (menu.quantity <= 0);
              menu.quantity--;
  
              return {
                customer,
                type: i % 2 === 0 ? 'Dine-In' : 'Takeaway',
                menu: menu.name,
                waitLimit: this.maxWaitTime,
                prepTime: menu.prepTime,
                price: menu.price,
              };
            })
          )
        ),
        tap(({ customer, type, menu, waitLimit, prepTime, price }) => {
          const employee = this.employees[Math.floor(Math.random() * this.employees.length)];
          const order = {
            customer,
            type,
            menu,
            employee,
            amount: price,
            timeIn: Date.now(),
          };
  
          const timeout$ = timer(waitLimit);
          const work$ = timer(prepTime).pipe(
            tap(() => {
              this.completedOrders$.next(order);
              this.logs.unshift(`✅ ${employee} served ${customer} [${menu}] in ${prepTime}ms`);
              this.employeeEffort[employee] = (this.employeeEffort[employee] || 0) + prepTime;
              this.currentOrders = this.currentOrders.filter(o => o.customer !== customer);
            })
          );
  
          this.assignments[customer] = employee;
          this.logs.unshift(`🕒 ${customer} placed ${menu} order with ${employee}`);
          this.logs = this.logs.slice(0, 10);
          this.currentOrders.push(order);
  
          work$.pipe(takeUntil(timeout$)).subscribe();
          timeout$.pipe(
            tap(() => {
              this.refundedOrders$.next(order);
              this.logs.unshift(`❌ ${customer} left due to delay. Refund ₹${order.amount}`);
              this.currentOrders = this.currentOrders.filter(o => o.customer !== customer);
            })
          ).subscribe();
        })
      ).subscribe();
    }
  }