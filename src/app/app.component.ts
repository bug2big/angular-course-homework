import { Component } from '@angular/core';
import { courseList } from './fake.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = courseList;
  title = 'hw1';
}
