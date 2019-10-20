import {Component, OnInit} from '@angular/core';
import {ElectronService} from 'ngx-electron';
import {NodeService} from '../Services/NodeService';

@Component({
  templateUrl: '../Views/home.component.html',
  styleUrls: ['../Styles/home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private electronService: ElectronService,
              private nodeSerivice: NodeService) {
  }
  ngOnInit(): void {
  }

  public test() {
  }
}
