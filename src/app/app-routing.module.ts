import { GameDashboardComponent } from './components/game-dashboard/game-dashboard.component';
import { SnakeLadderComponent } from './components/snake-ladder/snake-ladder.component';
import { PiGameComponent } from './components/pi-game/pi-game.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',redirectTo:'game-dashboard', pathMatch: 'full' },
  { path:'home',pathMatch: 'full', component: AppComponent },
  { path:'game-dashboard',pathMatch: 'full', component: GameDashboardComponent },
  { path:'pi-game',pathMatch: 'full', component: PiGameComponent },
  { path:'snake-ladder',pathMatch: 'full', component: SnakeLadderComponent },
  { path: 'ssg', loadChildren: () => import('./ssg-game/ssg-game.module').then(m => m.SsgGameModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
