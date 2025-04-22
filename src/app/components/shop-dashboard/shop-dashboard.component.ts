import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-dashboard',
  template: `
    <mat-card>
      <mat-card-title>Shop Simulation</mat-card-title>
      <mat-card-content>
        Employees: {{ shop.employees.join(', ') }}<br />
        Customers: {{ shop.customers.join(', ') }}
      </mat-card-content>
    </mat-card>
  `,
})
export class ShopDashboardComponent {
  constructor(public shop: ShopService) {}
}