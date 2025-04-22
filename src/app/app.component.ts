import { Component } from '@angular/core';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  template: `
    <div style="padding: 20px">
      <!-- <h1>CafeRx ☕</h1>
      <p>Status: <strong>{{ shopStatus }}</strong></p>
      <button mat-raised-button color="primary" (click)="openShop()" [disabled]="shopStatus === 'Open'">Open Shop</button>
   -->
   <app-configuration></app-configuration>
      <!-- <app-shop-dashboard></app-shop-dashboard>
      <app-revenue-board></app-revenue-board>
      <app-assignment-board></app-assignment-board> -->
    
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 16px;padding-bottom: 20px">
      <app-shop-dashboard></app-shop-dashboard>
      <app-employee-effort></app-employee-effort>
       <app-refunded-orders></app-refunded-orders>
   <app-customer-employee-map></app-customer-employee-map>
   <app-table-visual></app-table-visual>
   <app-live-revenue></app-live-revenue>
 </div>
 <app-activity-log></app-activity-log>
  `,
})
export class AppComponent {
  shopStatus = '';

  constructor(private shop: ShopService) {
    this.shop.shopStatus$.subscribe((status) => (this.shopStatus = status));
  }

  openShop() {
    this.shop.openShop();
  }
}