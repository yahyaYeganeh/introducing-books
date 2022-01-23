import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {

    // displayMode: BookDisplayModeEnum;
    // displayModeEnum = BookDisplayModeEnum;

    constructor(private router: Router) { }

    ngOnInit() {

      // No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = BookDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = BookDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = BookDisplayModeEnum.Edit;
      //     break;
      // }
    }

}

// enum BookDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
