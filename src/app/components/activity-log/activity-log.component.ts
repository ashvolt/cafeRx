import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-activity-log',
  template: `
    <mat-card>
      <mat-card-title>Activity Log 📋</mat-card-title>
      <mat-card-content>
        <div *ngFor="let log of shop.logs">{{ log }}</div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ActivityLogComponent {
  constructor(public shop: ShopService) {}
}
