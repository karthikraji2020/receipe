import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';
import { SearchComponent } from './component/search/search.component';
import { CardGridComponent } from './component/card-grid/card-grid.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ReceipesService } from './services/receipes.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    CardGridComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ReceipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
