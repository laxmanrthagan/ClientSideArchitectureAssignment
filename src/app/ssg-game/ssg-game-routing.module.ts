import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SsgGameComponent} from './ssg-game.component';

const routes: Routes = [
  {
    path: '**',
    component: SsgGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsgGameRoutingModule {}

