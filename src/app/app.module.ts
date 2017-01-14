import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './container/app.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';

import { MoviesRetrieverService } from './services/movies-retriever.service';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [MoviesRetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
