import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourceModule } from '../course/course.module';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourceModule
  ]
})
export class CoursesModule { }
