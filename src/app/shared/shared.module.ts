import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'ngx-avatar';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    AngularFontAwesomeModule,
    AvatarModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    AvatarModule,
    MaterialModule,
    AngularFontAwesomeModule
  ]
})
export class SharedModule { }
