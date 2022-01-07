import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'book/:id',
    component: BookDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
