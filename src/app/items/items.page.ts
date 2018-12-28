import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ItemModel } from './_models/item.model';
import { ItemsService } from './_services/items.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items$: BehaviorSubject<ItemModel[]>;

  isProcessing: Boolean = false;

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.items$  = this.itemsService.items$;
  }

  refresh() {
    this.isProcessing  = true;
    this.itemsService.fetch().subscribe(
      (result) => {
        this.isProcessing  = false;
      }
    );
  }

  hasItems(items: ItemModel[]): boolean {
    return items && items.length > 0 ? true : false;
  }

  add() {
    this.navCtrl.navigateForward('/items/add');
  }

}
