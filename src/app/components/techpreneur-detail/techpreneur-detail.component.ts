import { Component, OnInit } from '@angular/core';
import { techprenuers } from '../../data/techpreneurs';
import { ActivatedRoute } from '@angular/router'; //to get params from route we need this service. it returns observables
import { Title } from '@angular/platform-browser'; //to set page title we need the title service from the platform-browser library

@Component({
  selector: 'app-techpreneur-detail',
  templateUrl: './techpreneur-detail.component.html',
  styleUrls: ['./techpreneur-detail.component.css']
})
export class TechpreneurDetailComponent implements OnInit {

  personID:number;
  personName:string;
  personBio:string;

  //dependency injection: activatedRoute & title are injected here
  constructor(private activatedRoute: ActivatedRoute, private title: Title) { } 

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(res => {
      this.personID = +res['id']; //the addition sign converts the value to int
      this.personID -=1; //array index starts from 0 but the id starts from one, we need to subtract one to get the correct person
      this.personName = techprenuers[this.personID].name; 
      this.personBio = techprenuers[this.personID].bio;
      this.title.setTitle(this.personName); //we use the setTitle method of the title service to dynamically change our title.
    })
  }

}
