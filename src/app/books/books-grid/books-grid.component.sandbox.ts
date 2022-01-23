import { sandboxOf } from 'angular-playground';
import { SharedModule } from '../../shared/shared.module';
import { BooksGridComponent } from './books-grid.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { books } from '../../shared/mocks';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule, RouterTestingModule ],
  label: 'Books Grid Component'
};

export default sandboxOf(BooksGridComponent, sandboxConfig)
  .add('With Many Books', {
    template: `<cm-books-grid [books]="books"></cm-books-grid>`,
    context: {
      books: books
    }
  })
  .add('With 10 Books', {
    template: `<cm-books-grid [books]="books"></cm-books-grid>`,
    context: {
      books: books.slice(0, 10)
    }
  })
  .add('With 4 Books', {
    template: `<cm-books-grid [books]="books"></cm-books-grid>`,
    context: {
      books: books.slice(0, 4)
    }
  })
  .add('Without Books', {
    template: `<cm-books-grid></cm-books-grid>`
  });

