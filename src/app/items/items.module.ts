import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemsPage } from './items.page';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsListItemComponent } from './items-list-item/items-list-item.component';
import { ItemAddEditComponent } from './item-add-edit/item-add-edit.component';
import { ItemAddPage } from './item-add/item-add.page';
import { ItemEditPage } from './item-edit/item-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
  },
  {
    path: 'add',
    component: ItemAddPage
  },
  {
    path: 'edit',
    redirectTo: ''
  },
  {
    path: 'edit/:id',
    component: ItemEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ItemsPage,
    ItemsListComponent,
    ItemsListItemComponent,
    ItemAddEditComponent,
    ItemAddPage,
    ItemEditPage,
  ]
})
export class ItemsPageModule {}
