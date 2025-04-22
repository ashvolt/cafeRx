import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-configuration',
  template: `
    <div class="p-4 space-y-4">
      <h2 class="text-xl font-semibold">Employee Selection</h2>
      <div class="flex gap-2 flex-wrap">
        <label *ngFor="let emp of allEmployees">
          <input type="checkbox" [value]="emp" (change)="toggleEmployee(emp, $event)" /> {{ emp }}
        </label>
      </div>

      <h2 class="text-xl font-semibold">Menu Setup</h2>
      <div *ngFor="let item of menuItems; let i = index" class="grid grid-cols-4 gap-2 items-center">
        <input placeholder="Name" [(ngModel)]="menuItems[i].name" class="border p-1" />
        <input type="number" placeholder="Prep Time" [(ngModel)]="menuItems[i].prepTime" class="border p-1" />
        <input type="number" placeholder="Price" [(ngModel)]="menuItems[i].price" class="border p-1" />
        <input type="number" placeholder="Qty" [(ngModel)]="menuItems[i].quantity" class="border p-1" />
      </div>
      <button (click)="addItem()" class="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Add Menu Item</button>

      <button (click)="startShop()" class="block mt-4 px-4 py-2 bg-green-600 text-white rounded">Start Shop</button>
    </div>
  `,
})
export class ConfigurationComponent {
  allEmployees = this.shop.allEmployees;
  selectedEmployees: string[] = [];
  menuItems = [
    { name: 'Espresso', prepTime: 3000, price: 50, quantity: 5 },
    { name: 'Pastry', prepTime: 2000, price: 30, quantity: 5 },
  ];

  constructor(private shop: ShopService) {}

  toggleEmployee(emp: string, checked: Event) {
    if ((checked.target as HTMLInputElement).checked) this.selectedEmployees.push(emp);
    else this.selectedEmployees = this.selectedEmployees.filter(e => e !== emp);
  }

  addItem() {
    this.menuItems.push({ name: '', prepTime: 0, price: 0, quantity: 1 });
  }

  startShop() {
    this.shop.configureEmployees(this.selectedEmployees);
    this.shop.configureMenu(this.menuItems);
    this.shop.openShop();
  }
}