import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/book.interface';

@Pipe({
  name: 'formatsImage'
})
export class FormatsImagePipe implements PipeTransform {

  transform(book: Result ): string {
    let image = "";
    image = book.formats['image/jpeg']
    if (image === undefined) {
      return '../../../assets/images/cat1.png';
    }
    return image;
  }

}
