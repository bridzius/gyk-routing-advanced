import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieListObject, MovieSearchResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class MovieSearchService {
  constructor(private httpClient: HttpClient) {}

  private readonly api_key = '8cd4807e5f458e0cbb740a6e3f872675';

  getMovies(query: string, year: number | null): Observable<MovieListObject[]> {
    const requiredParameters = {
      api_key: this.api_key,
      query,
    };
    const params = year ? { ...requiredParameters, year } : requiredParameters;

    return this.httpClient
      .get<MovieSearchResponse>(`https://api.themoviedb.org/3/search/movie`, {
        params: params,
      })
      .pipe(map((response) => response.results));
  }

  getMovie(id: string): Observable<MovieListObject> {
    return this.httpClient.get<MovieListObject>(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: this.api_key,
        },
      }
    );
  }
}
