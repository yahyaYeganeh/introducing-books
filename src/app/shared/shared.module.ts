import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { PaginationModule } from './pagination/pagination.module';
import { SearchTextboxModule } from './search-textbox/search-textbox.module';
@NgModule({
  imports: [CommonModule,FilterTextboxModule,SearchTextboxModule,PaginationModule],
  exports: [ CommonModule, FormsModule,FilterTextboxModule,SearchTextboxModule, CapitalizePipe, TrimPipe,PaginationModule],
  declarations: [ CapitalizePipe, TrimPipe ],
 
})
export class SharedModule { }