import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/fake.data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() courseList: Course[] = [];
  @Input() isEditable: boolean = false;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
