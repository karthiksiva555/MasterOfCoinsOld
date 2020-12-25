import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BuddiesComponent } from './buddies/buddies.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: 'groups', component: GroupsComponent },
  { path: 'buddies', component: BuddiesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

