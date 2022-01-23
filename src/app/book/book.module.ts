import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  imports: [BookRoutingModule, SharedModule],
  declarations: [BookRoutingModule.components]
})
export class BookModule { }
