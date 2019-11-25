import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from '@myorg/utils';
import { ELECTRON_PROVIDERS, ElectronService } from './services';

@NgModule({
  providers: [...ELECTRON_PROVIDERS]
})
export class MyorgElectronCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: MyorgElectronCoreModule,
    private _electronService: ElectronService
  ) {
    throwIfAlreadyLoaded(parentModule, 'MyorgElectronCoreModule');
  }
}
