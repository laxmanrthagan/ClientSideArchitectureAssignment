import { GameDashboardComponent } from '../components/game-dashboard/game-dashboard.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import { SsgGameComponent } from './ssg-game.component';
import { SsgGameRoutingModule } from './ssg-game-routing.module';

@NgModule({
  declarations: [SsgGameComponent,GameDashboardComponent],
  imports: [CommonModule, SsgGameRoutingModule, ScullyLibModule],
})
export class SsgGameModule {}
