import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MovieSearchFormComponent } from './movies-page/movie-search-form/movie-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MoviesPageComponent,
    MoviePageComponent,
    MovieSearchFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MoviesPageComponent,
        children: [{ path: ':id', component: MoviePageComponent }],
      },
    ]),
  ],
})
export class MoviesModule {}
