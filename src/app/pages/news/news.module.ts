import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NewsPageComponent }]),
  ],
})
export class NewsModule {}
