import {Component, Input} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: any;
  dialogVisible = false;

  constructor(private http: HttpClient) { }

  toggleDialog() {
    this.dialogVisible = !this.dialogVisible;
  }
}
