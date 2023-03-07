import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.css']
})
export class ListingCardComponent {
@Input() college: string;
@Input() className: string;
@Input() instructor: string;
@Input() accountName: string;
@Input() semester: string;

constructor(){
  this.college = "Undefined parameter";
  this.className = "Undefined parameter";
  this.instructor = "Undefined parameter";
  this.accountName = "Undefined parameter";
  this.semester = "Undefined parameter";
}
}
