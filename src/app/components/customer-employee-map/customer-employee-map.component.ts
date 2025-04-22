// customer-employee-map.component.ts
import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-customer-employee-map',
  template: `
    <mat-card class="fade-in">
      <mat-card-title>Customer-Employee Assignment 👥</mat-card-title>
      <mat-card-content>
        <div *ngFor="let customer of customers">
          {{ customer }} 🍵 → {{ shop.assignments[customer] || 'Waiting' }}
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `.fade-in {
      animation: fadeIn 1s ease-in-out;
    }`
  ]
})
export class CustomerEmployeeMapComponent {
  customers: string[] = [];
  constructor(public shop: ShopService) {
    this.customers = shop.customers;
  }
}