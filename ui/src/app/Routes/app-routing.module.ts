import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../Components/home.component';
import {MediaInfoComponent} from '../Components/mediainfo.component';
import {SettingsComponent} from '../Components/settings.component';
import {TasksComponent} from '../Components/tasks.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'media-info', component: MediaInfoComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
