import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../_services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
  }

}
