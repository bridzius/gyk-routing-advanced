import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsPageComponent } from './tv-shows-page/tv-shows-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TvShowsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TvShowsPageComponent }]),
  ],
})
export class TvShowsModule {}
