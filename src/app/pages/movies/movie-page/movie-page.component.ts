import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { MovieSearchService } from 'src/app/services/movie-search.service';
import { MovieListObject } from 'src/app/services/types';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent {
  movie$: Observable<MovieListObject>;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieSearchService
  ) {
    this.movie$ = this.route.paramMap.pipe(
      map((params) => params.get('id')), //gauname /:id
      filter((id): id is string => id !== null), // neiname toliau, jei id neegzistuoja
      switchMap((id) => this.movieService.getMovie(id)) // perkeliame observable į serviso kvietimo rezultatą
    );
  }
}
