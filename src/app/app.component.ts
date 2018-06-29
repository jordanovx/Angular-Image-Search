import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private imageService: ImageService) {}

  title = 'Angular Image Search';
  searchTerm = '';
  loading = false;
  hits = [];

  onSubmit() {
    console.log(this.imageService);
     this.loading = true;
     this.hits = [];
     this.imageService.search(this.searchTerm)

       .subscribe((result: any) => {
         this.hits = result.hits;
         console.log(this.hits);
         this.loading = false;
      });
  }




}
