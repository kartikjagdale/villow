/** Angular 2 Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/** Ngrx Releated Modules */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStoreModule } from '@ngrx/router-store';
import { DBModule } from '@ngrx/db';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

/** Angular 2 Material Module */
import { MaterialModule } from '@angular/material';

/** Components in Application */
import { AppComponent } from './container/app.component';
import { MovieCardComponent } from './component/movie-card/movie-card.component';

import { MoviesRetrieverService } from './services/movies-retriever.service';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { MoviesPageComponent } from './container/movies-page/movies-page.component';
import { MovieSearchComponent } from './component/movie-search/movie-search.component';
import { MoviePreviewListComponent } from './component/movie-preview-list/movie-preview-list.component';

import { appRoutes } from './routes';
import { reducer } from './reducers';
import { schema } from './db';



@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HeaderComponent,
    FooterComponent,
    MoviesPageComponent,
    MovieSearchComponent,
    MoviePreviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MaterialModule.forRoot(),
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    DBModule.provideDB(schema)
  ],
  providers: [MoviesRetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
