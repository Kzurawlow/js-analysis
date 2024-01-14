import {Component, OnInit} from '@angular/core';
import {createClient} from 'pexels';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  photos: any[] = [];
  currentPage = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }


  async fetchData() {
    const client = createClient('eqDK60Xl9lzIP4RHt4YCNdwO2mm5RLkFzl1WGyQytonWVWaHOOzdBhfr');
    const resp = await client.photos.search({query: 'Nature', per_page: 12, page: this.currentPage})
    this.currentPage++;
    // @ts-ignore
    this.photos = resp.photos;
  }

  clearPhotos() {
    this.photos = [];
    this.currentPage = 1;
  }


}
