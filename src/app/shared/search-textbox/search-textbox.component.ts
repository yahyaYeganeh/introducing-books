import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-search-textbox',
  templateUrl: './search-textbox.component.html',
  styleUrls: [ './search-textbox.component.css' ]
})
export class SearchTextboxComponent {
  constructor(private router: Router
       
       ) { }

    model: { search: string } = { search: '' };
    searchText: string = ''; 
    @Output()
    search: EventEmitter<string> = new EventEmitter<string>();

    searchChanged(event: any) {
      event.preventDefault();
      this.search.emit(this.model.search); // Raise changed event
    }
    searchBook() {
  
      if (this.searchText.trim()!="")
      {
          this.router.navigate([ '/books',{search:this.searchText} ]);
      }
    }
}

