import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@myorg/core';
import { AppService } from '@myorg/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
