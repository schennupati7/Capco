import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomTableComponent} from './custom-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    FormsModule,
    ReactiveFormsModule,

    InfiniteScrollModule,
  ],
  exports: [
    CustomTableComponent
  ]
})
export class CustomTableModule {
}
