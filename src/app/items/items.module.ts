import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemsPage } from './items.page';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsListItemComponent } from './items-list-item/items-list-item.component';
import { ItemAddEditComponent } from './item-add-edit/item-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ItemsPage, ItemsListComponent, ItemsListItemComponent, ItemAddEditComponent]
})
export class ItemsPageModule {}