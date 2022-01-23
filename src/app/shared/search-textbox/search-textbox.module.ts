import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchTextboxComponent } from './search-textbox.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [SearchTextboxComponent],
  declarations: [SearchTextboxComponent]
})
export class SearchTextboxModule { }
