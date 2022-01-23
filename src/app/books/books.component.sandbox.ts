import { RouterTestingModule } from '@angular/router/testing';
import { sandboxOf } from 'angular-playground';

import { SharedModule } from '../shared/shared.module';
import { BooksComponent } from './books.component';
import { BooksCardComponent } from './books-card/books-card.component';
import { BooksGridComponent } from './books-grid/books-grid.component';
import { CoreModule } from '../core/core.module';
import { books, MockDataService } from '../shared/mocks';
import { DataService } from '../core/services/data.service';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule, RouterTestingModule ],
  declarations: [ BooksCardComponent, BooksGridComponent ],
  providers: [
    { provide: DataService, useClass: MockDataService }
],
  label: 'Books Component'
};

export default sandboxOf(BooksComponent, sandboxConfig)
  .add('With Books', {
    template: `<cm-books></cm-books>`
  });
