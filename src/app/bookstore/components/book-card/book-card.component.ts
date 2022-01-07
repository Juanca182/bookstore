import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  @Input() book!: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
