import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page.component';
import { CelebsPageComponent } from './pages/celebs/celebs-page/celebs-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { MoviePageComponent } from './pages/movies/movie-page/movie-page.component';
import { MoviesPageComponent } from './pages/movies/movies-page/movies-page.component';
import { NewsPageComponent } from './pages/news/news-page/news-page.component';
import { TvShowsPageComponent } from './pages/tv-shows/tv-shows-page/tv-shows-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent },
  {
    path: 'movies',
    component: MoviesPageComponent,
    children: [{ path: ':id', component: MoviePageComponent }],
  },
  { path: 'tv-shows', component: TvShowsPageComponent },
  { path: 'celebs', component: CelebsPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
