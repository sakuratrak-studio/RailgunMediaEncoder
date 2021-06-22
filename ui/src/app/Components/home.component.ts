import {Component, OnInit} from '@angular/core';
import {NodeService} from '../Services/NodeService';
import {ElectronService} from '../Services/ElectronService';
import Swal from 'sweetalert2';

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
    Swal.fire('Test message');
  }
}
