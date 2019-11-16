import { Component, OnInit } from '@angular/core';
import { ProtegeService } from '../protege.service';

@Component({
  selector: 'app-classes-page',
  templateUrl: './classes-page.component.html',
  styleUrls: ['./classes-page.component.css']
})
export class ClassesPageComponent implements OnInit {
classes = '';
  constructor (public protegeService: ProtegeService) {}

  ngOnInit() {

  }

  addToListClasses(classes: string) {
    this.protegeService.listClasses.push(classes);
  }

}