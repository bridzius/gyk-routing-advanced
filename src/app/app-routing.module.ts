import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page.component";
import { NewsPageComponent } from "./components/news-page.component";
import { MoviesPageComponent } from "./components/movies-page.component";
import { TvShowsPageComponent } from "./components/tv-shows-page.component";
import { CelebsPageComponent } from "./components/celebs-page.component";
import { NotFoundPageComponent } from "./components/not-found-page.component";
import { MoviePageComponent } from "./components/movie-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "news", component: NewsPageComponent },
  {
    path: "movies", component: MoviesPageComponent, children: [
      { path: ":id", component: MoviePageComponent }
    ]
  },
  { path: "tv-shows", component: TvShowsPageComponent },
  { path: "celebs", component: CelebsPageComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
