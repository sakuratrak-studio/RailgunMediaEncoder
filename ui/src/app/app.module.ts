import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './Routes/app-routing.module';
import {AppComponent} from './Components/app.component';
import {MatButtonModule, MatRippleModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './Components/home.component';
import {MediaInfoComponent} from './Components/mediainfo.component';
import {SettingsComponent} from './Components/settings.component';
import {NgxElectronModule} from 'ngx-electron';
import {TasksComponent} from './Components/tasks.component';
import {TaskdetailComponent} from './Components/taskdetail.component';
import {NodeService} from './Services/NodeService';
import {MediaInfoService} from './Services/MediaInfoService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MediaInfoComponent,
    SettingsComponent,
    TasksComponent,
    TaskdetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatRippleModule,
    MatButtonModule,
    NgxElectronModule,
    MatTabsModule,
  ],
  providers: [
    NodeService,
    MediaInfoService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
