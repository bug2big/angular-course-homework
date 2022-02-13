import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderModule } from './components/header/header.module';
import { ButtonModule } from './components/button/button.module';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    InfoComponent,
    SearchComponent,
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ButtonModule
  ],
  exports: [
    HeaderModule,
    ButtonModule
  ]
})
export class SharedModule { }
