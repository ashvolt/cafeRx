import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ShopDashboardComponent } from './components/shop-dashboard/shop-dashboard.component';
import { RevenueBoardComponent } from './components/revenue-board/revenue-board.component';
import { ActivityLogComponent } from './components/activity-log/activity-log.component';
import { AssignmentBoardComponent } from './components/assignment-board/assignment-board.component';
import { EmployeeEffortComponent } from './components/employee-effort/employee-effort.component';
import { RefundedOrdersComponent } from './components/refunded-orders/refunded-orders.component';
import { CustomerEmployeeMapComponent } from './components/customer-employee-map/customer-employee-map.component';
import { LiveRevenueComponent } from './components/live-revenue/live-revenue.component';
import { TableVisualComponent } from './components/table-visual/table-visual.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ShopDashboardComponent, RevenueBoardComponent, 
    ActivityLogComponent, AssignmentBoardComponent,
    EmployeeEffortComponent,RefundedOrdersComponent,
    CustomerEmployeeMapComponent, TableVisualComponent, LiveRevenueComponent,ConfigurationComponent],
  imports: [BrowserModule, FormsModule,BrowserAnimationsModule, MatCardModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}