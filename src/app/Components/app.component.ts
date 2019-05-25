import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Views/app.component.html',
  styleUrls: ['../Styles/app.component.scss']
})
export class AppComponent {
  title = 'RailgunMediaEncoder';
  menuExtend: boolean;

  constructor(public router: Router) {

  }

}
