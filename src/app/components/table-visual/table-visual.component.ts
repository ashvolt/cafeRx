// table-visual.component.ts
import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-table-visual',
  template: `
    <mat-card class="slide-in">
      <mat-card-title>Tables & Active Orders 🪑</mat-card-title>
      <mat-card-content>
        <div class="table-grid">
          <div class="table" *ngFor="let o of shop.currentOrders">
            🪑 Table: {{ o.customer }}<br/>
            ☕ {{ o.menu }}<br/>
            👩‍🍳 {{ o.employee }}
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `.slide-in {
      animation: slideIn 0.8s ease-out;
    }
    .table-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 12px;
    }
    .table {
      border: 1px solid #ccc;
      padding: 12px;
      border-radius: 8px;
      background: #fefefe;
    }`
  ]
})
export class TableVisualComponent {
  constructor(public shop: ShopService) {}
}