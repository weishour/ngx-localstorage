import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatCardModule} from '@angular/material';

import {NgxLocalStorageModule} from '../ngx-localstorage/ngx-localstorage.module';

import {DecoratorComponent} from './decorator/decorator.component';
import {DirectiveComponent} from './directive/directive.component';
import {StorageServiceComponent} from './storage-service/storage-service.component';
import {EventServiceComponent} from './event-service/event-service.component';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,

    NgxLocalStorageModule.forRoot()
  ],
  declarations: [DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventServiceComponent],
  exports: [DecoratorComponent, DirectiveComponent, StorageServiceComponent, EventServiceComponent]
})
export class DemoModule {
}
