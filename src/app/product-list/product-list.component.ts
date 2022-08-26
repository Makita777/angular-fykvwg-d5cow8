import { Component } from '@angular/core';
import { Names } from '../names';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  Names: Array<any> = Names;

  share() {
    window.alert('View Parent Component!');
  }

  onChild() {
    window.alert('View Child Component!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
