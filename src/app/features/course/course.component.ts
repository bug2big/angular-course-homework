import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Course } from 'src/app/fake.data';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() courseCard: Course = {
    title: '',
    description: '',
    creationDate: undefined,
    duration: undefined,
    authors: []
  };
  @Input() isEditable: boolean = false;
  
  constructor(private datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  dateformat(date?: Date) {
    return this.datepipe.transform(date, 'dd.MM.yyyy');
  }
  durationFormat(duration?: number) {
    if(duration == undefined) {
      return "00:00";
    }
    const div = Math.floor(duration/60);;
    let formatted = '';
    if(div < 1) {
      let minutes = String(duration);
		  if(minutes.length == 1) {
        minutes = `0${minutes}`;
      }
      formatted = `00:${duration}`;
	  }
	  else {
		  let mod = String(duration%60);
		  if(mod.length == 1) {
        mod = `0${mod}`;
		  }
		  formatted = `0${div}:${mod}`;
	  }
    return formatted;
  }

  showExtraAction() {
    return this.isEditable;
  }
}
