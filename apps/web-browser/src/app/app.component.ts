import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@myorg/web';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
