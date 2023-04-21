import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RoyalEditorComponent } from './royal-editor/royal-editor.component';
import { RoyalCanvasComponent } from './royal-canvas/royal-canvas.component';
import { RoyalHomeComponent } from './royal-home/royal-home.component';

const routes: Routes = [
  {
    path: '',
    component: RoyalHomeComponent
  }
];

@NgModule({
  declarations: [
    RoyalHomeComponent,
    RoyalEditorComponent,
    RoyalCanvasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoyalModule { }
