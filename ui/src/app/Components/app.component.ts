import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ElectronService} from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../Styles/app.component.scss']
})
export class AppComponent {
  title = 'RailgunMediaEncoder';
  menuExtend: boolean;


  constructor(public router: Router,
              public electronService: ElectronService
  ) {

  }

  toggleMaximize() {
    if (this.electronService.remote.getCurrentWindow().isMaximized()) {
      this.electronService.remote.getCurrentWindow().unmaximize();
    } else {
      this.electronService.remote.getCurrentWindow().maximize();
    }
  }
}
