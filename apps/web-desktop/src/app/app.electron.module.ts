import { NgModule } from '@angular/core';
import { MyorgElectronCoreModule } from '@myorg/electron';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, MyorgElectronCoreModule],
  bootstrap: [AppComponent]
})
export class AppElectronModule {}
