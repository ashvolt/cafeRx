// refunded-orders.component.ts
import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-refunded-orders',
  template: `
    <mat-card>
      <mat-card-title>Refunded Orders 💸</mat-card-title>
      <mat-card-content>
        <div *ngFor="let refund of refunds">{{ refund.customer }} - ₹{{ refund.amount }}</div>
      </mat-card-content>
    </mat-card>
  `,
})
export class RefundedOrdersComponent {
  refunds: any[] = [];

  constructor(shop: ShopService) {
    shop.refundedOrders$.subscribe((r) => this.refunds.unshift(r));
  }
}