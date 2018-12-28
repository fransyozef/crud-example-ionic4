import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../_models/item.model';
import { ItemsService } from '../_services/items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.page.html',
  styleUrls: ['./item-edit.page.scss'],
})
export class ItemEditPage implements OnInit {


  item: ItemModel;

  id: number = null;

  readyView: Boolean = false;
  hasFetched: Boolean  = false;
  hasNoItem: Boolean = false;
  isProcessing: Boolean = false;

  constructor(
    private itemsService: ItemsService,
    private activeRoute: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.resolveRoute();
  }

  resolveRoute() {
    this.id  = +this.activeRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.getItem();
    }
  }

  formSubmitEvent($event) {
    this.navCtrl.navigateBack('/items');
  }

  delete() {
    if (this.item && !this.isProcessing) {
      this.isProcessing  = true;
      this.itemsService.delete(this.item.id).subscribe(
        (status) => {
          this.navCtrl.navigateBack('/items');
        }
      );
    }
  }

  private setItem(item: ItemModel) {
    this.item  = item;
    console.log(this.item);
  }

  private getItem() {
    console.log('*** getItem()');
    const item  = this.itemsService.get(this.id);
    if (item) {
      this.setItem(item);
    } else {
      if (!this.hasFetched) {
        console.log('-- cannot find in local store, trying remote store');
        this.fetchItem();
      } else {
        console.log('-- cannot find in local store and remote store and again in local store!!!!');
        this.handleItemNotFound();
      }
    }
  }

  private handleItemNotFound() {
    this.readyView  = true;
    this.hasNoItem  = true;
    console.log('***** I GIVE UP');
  }

  private fetchItem() {
    this.hasFetched  = true;
    this.itemsService.fetchItem(this.id).subscribe(
      (result) => {
        if (result) {
          this.setItem(result);
        } else {
          console.log('-- cannot find in local store and remote store, trying again in local store');
          this.getItem();
        }
      }
    );
  }



}
