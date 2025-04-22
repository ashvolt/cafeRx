import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-assignment-board',
  template: `
    <mat-card>
      <mat-card-title>Employee Assignments</mat-card-title>
      <mat-card-content>
        <div *ngFor="let c of customers">{{ shop.assignments[c] }} → <strong>{{ c }}</strong></div>
      </mat-card-content>
    </mat-card>
  `,
})
export class AssignmentBoardComponent {
  customers: string[] = [];

  constructor(public shop: ShopService) {
    this.customers = shop.customers;
  }
}