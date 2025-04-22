import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-employee-effort',
  template: `
    <mat-card>
      <mat-card-title>Employee Effort ⏱️</mat-card-title>
      <mat-card-content>
        <div *ngFor="let e of employees">
          {{ e }}: {{ shop.employeeEffort[e] || 0 }} ms
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class EmployeeEffortComponent {
  employees: string[] = [];

  constructor(public shop: ShopService) {
    this.employees = shop.employees;
  }
}