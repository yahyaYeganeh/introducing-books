import { NgModule } from '@angular/core';
import { BooksModule } from '../books/books.module';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [HomeRoutingModule, SharedModule,BooksModule],
  declarations: [HomeRoutingModule.components]
})
export class HomeModule { }
