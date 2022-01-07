import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { RESTBooksResponse } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styles: [
  ]
})
export class BookDescriptionComponent implements OnInit {

  idBook!: RESTBooksResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .subscribe( ({ id }) => {
        console.log(id); 
        this.bookService.getBookById( id )
          .subscribe( book => {
            this.idBook = book;
            console.log( book );
          })

          
      });
      
  }

}
