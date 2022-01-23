import { sandboxOf } from 'angular-playground';
import { SharedModule } from '../../shared/shared.module';
import { BooksCardComponent } from './books-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { books } from '../../shared/mocks';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule, RouterTestingModule ],
  label: 'Books Card Component'
};

export default sandboxOf(BooksCardComponent, sandboxConfig)
  .add('With Many Books', {
    template: `<cm-books-card [books]="books"></cm-books-card>`,
    context: {
      books: books
    }
  })
  .add('With 10 Books', {
    template: `<cm-books-card [books]="books"></cm-books-card>`,
    context: {
      books: books.slice(0, 10)
    }
  })
  .add('With 4 Books', {
    template: `<cm-books-card [books]="books"></cm-books-card>`,
    context: {
      books: books.slice(0, 4)
    }
  })
  .add('Without Books', {
    template: `<cm-books-card></cm-books-card>`
  });

