import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../Components/home.component';
import {MediaInfoComponent} from '../Components/mediainfo.component';
import {SettingsComponent} from '../Components/settings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'media-info', component: MediaInfoComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
