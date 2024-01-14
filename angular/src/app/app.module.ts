import { NgModule} from '@angular/core';
import {PhotoComponent} from "./photo/photo.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)]
// };

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
