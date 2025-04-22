import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-live-revenue',
  template: `
    <mat-card class="pulse">
      <mat-card-title>☕ Cafe Revenue</mat-card-title>
      <mat-card-content>
        ₹ {{ revenue }}
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `.pulse {
      animation: pulseAnim 2s infinite;
    }
    @keyframes pulseAnim {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }`
  ]
})
export class LiveRevenueComponent {
  revenue: number = 0;
  constructor(shop: ShopService) {
    shop.revenue$.subscribe(r => this.revenue = r);
  }
}