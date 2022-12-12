import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebsPageComponent } from './celebs-page/celebs-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CelebsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CelebsPageComponent }]),
  ],
})
export class CelebsModule {}
