import {Injectable} from '@angular/core';
import fs from 'fs';
import childProcess from 'child_process';
import {ElectronService} from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  public fs: typeof fs;
  public childProcess: typeof childProcess;

  constructor(
    electronService: ElectronService
  ) {
    this.fs = electronService.remote.require('fs');
    this.childProcess = electronService.remote.require('child_process');
  }
}
