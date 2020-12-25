import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MasterofcoinsnavbarComponent } from './masterofcoinsnavbar/masterofcoinsnavbar.component';
import { BuddiesComponent } from './buddies/buddies.component';
import { BuddyComponent } from './buddies/buddy/buddy.component';
import { AppRoutingModule } from './app-routing.module';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterofcoinsnavbarComponent,
    BuddiesComponent,
    BuddyComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
