import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.scss"]
})
export class MoviePageComponent {
  movieId$;

  constructor(private route: ActivatedRoute) {
    this.movieId$ = this.route.paramMap.pipe(map(params => params.get("id")));
  }

}
