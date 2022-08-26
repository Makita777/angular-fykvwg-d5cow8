import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Names } from '../names';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css'],
})
export class ProductChildComponent implements OnInit {
  @Input() product: ProductListComponent;
  @Output() child = new EventEmitter();
  Names: Array<any> = Names;

  constructor() {}

  ngOnInit() {}
}
