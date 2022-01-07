import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Result } from '../../interfaces/book.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  term: string = '';
  books: Result[] = [];
  error: boolean = false;
  p: number = 1;
  loaded: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.load();
  }

  load () {
    this.bookService.loadBooks()
      .subscribe( (books) => {

        this.books = books.results;
        this.loaded = true;
        console.log( books );
      });
  }

  search() {
    this.books = [];
    this.error = false;
    this.loaded = false;
    console.log( this.term );

    this.bookService.searchBook( this.term)
      .subscribe( (books) => {
        
        if(books.count === 0){
          this.error = true;
          this.loaded = true;
          console.log(this.error);
        }
        this.books = books.results;
        this.loaded = true;
        console.log( books );
      });

  }

}
