import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private imageService: ImageService){}

  title = 'Angular Image Search';
  searchTerm = '';
  loading = false;
  images = [];

  onSubmit() {
    console.log(this.imageService)
     this.loading = false;
     this.images = [];
     this.imageService.search(this.searchTerm)

       .subscribe((result: any) => {
         this.images = result.photos;
         this.loading = false;
      });
  }


}
