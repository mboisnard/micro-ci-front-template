import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material';


@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
