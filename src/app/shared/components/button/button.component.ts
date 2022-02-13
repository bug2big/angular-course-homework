import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconName } from "@fortawesome/fontawesome-svg-core"
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title?: string = '';
  @Input() type?: string = '';
  @Input() iconName?: IconName | undefined;
  
  constructor(library: FaIconLibrary) {
    library.addIcons(faEdit, faTrashCan);
  }

  ngOnInit(): void {
  }
}