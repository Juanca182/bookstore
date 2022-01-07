import { Pipe, PipeTransform } from '@angular/core';
import {  Result } from '../interfaces/book.interface';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(book: Result, isModal: boolean): string {


    if (book.authors.length === 0 && !isModal) {
      return 'Unknow';
    } else if(book.authors.length === 1 && !isModal) {
      return book.authors[0].name;
    } else {
      
      let authorsStr = '';

      if (isModal) {
        book.authors.forEach( authors => {
          authorsStr += authors.name + ' ';           
        });
      }else {
        authorsStr = book.authors[0].name + '...' ; 
      }
      return authorsStr ;
      
      
    }

    
    

    
  }

}
