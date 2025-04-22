import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-revenue-board',
  template: `
    <mat-card>
      <mat-card-title>Revenue 💰</mat-card-title>
      <mat-card-content>₹{{ revenue }}</mat-card-content>
    </mat-card>
  `,
})
export class RevenueBoardComponent {
  revenue = 0;

  constructor(shop: ShopService) {
    shop.revenue$.subscribe((total) => (this.revenue = total));
  }
}