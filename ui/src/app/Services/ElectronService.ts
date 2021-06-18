import {Injectable} from '@angular/core';
import {ElectronWindow} from '../Helper/ElectronWindow';

declare let window: ElectronWindow;

@Injectable({
  providedIn: 'root'
})
export class ElectronService {
  constructor() {
  }

  public get remote() {
    return window.require('@electron/remote/');
  }
}
