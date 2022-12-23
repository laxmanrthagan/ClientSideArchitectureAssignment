// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemDirective } from './item.directive';
import { AppRoutingModule } from './app-routing.module';
import { PiGameComponent } from './components/pi-game/pi-game.component';
import { SnakeLadderComponent } from './components/snake-ladder/snake-ladder.component';
import { GameDashboardComponent } from './components/game-dashboard/game-dashboard.component';


// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective,
    PiGameComponent,
    SnakeLadderComponent,
    GameDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
