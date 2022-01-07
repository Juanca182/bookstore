import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';

import { AuthorPipe } from './pipes/author.pipe';
import { BlogComponent } from './pages/blog/blog.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormatsImagePipe } from './pipes/formats-image.pipe';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BookRoutingModule } from './book-routing.module';
import { FooterComponent } from './pages/footer/footer.component';




@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BookCardComponent,
    AuthorPipe,
    FormatsImagePipe,
    ContactUsComponent,
    BlogComponent,
    BookDescriptionComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BookRoutingModule
  ],
  exports: [
    HomeComponent,
    ProductsComponent,
    ContactUsComponent,
    BlogComponent,
    FooterComponent
  ]
})
export class BookstoreModule { }
