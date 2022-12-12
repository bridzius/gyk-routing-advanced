import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { MovieListObject } from 'src/app/services/types';

interface MovieSearchForm {
  title: FormControl<string | null>;
  year: FormControl<number | null>;
}

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.scss'],
})
export class MovieSearchFormComponent {
  public movieSearchForm: FormGroup<MovieSearchForm>;
  public movies$: Observable<MovieListObject[]> = of([]);

  constructor(
    formBuilder: FormBuilder,
    private movieSearch: MovieSearchService,
    private router: Router
  ) {
    this.movieSearchForm = formBuilder.group({
      title: formBuilder.control('', Validators.required),
      year: formBuilder.control<number | null>(null),
    });
  }

  navigateToMovie(id: number) {
    this.router.navigate(['movies', `${id}`]);
    this.movies$ = of([]);
  }

  findMovie() {
    if (this.movieSearchForm.valid) {
      this.movies$ = this.movieSearch.getMovies(
        this.movieSearchForm.controls.title.value as string,
        this.movieSearchForm.controls.year.value
      );
    }
  }
}
