import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { CelebsModule } from './pages/celebs/celebs.module';
import { MoviesModule } from './pages/movies/movies.module';
import { NewsModule } from './pages/news/news.module';
import { TvShowsModule } from './pages/tv-shows/tv-shows.module';

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    CelebsModule,
    MoviesModule,
    NewsModule,
    TvShowsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
