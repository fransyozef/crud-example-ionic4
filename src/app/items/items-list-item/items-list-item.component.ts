import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../_services/items.service';
import { ItemModel } from '../_models/item.model';

@Component({
  selector: 'app-items-list-item',
  templateUrl: './items-list-item.component.html',
  styleUrls: ['./items-list-item.component.scss']
})
export class ItemsListItemComponent implements OnInit {

  @Input() item: ItemModel;

  constructor(
    private itemsService: ItemsService,
  ) { }

  ngOnInit() {
  }

  edit() {
    // this.router.navigate(['/item-edit/' + this.item.id]);
  }

  delete() {
    this.itemsService.delete(this.item.id).subscribe();
  }

}
