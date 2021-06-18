export interface ElectronWindow extends Window {
  require(module: string): any;
}
