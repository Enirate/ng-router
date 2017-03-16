import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { techLeaders } from '../../data/tech-leaders';

@Component({
  selector: 'app-tech-leaders-detail',
  templateUrl: './tech-leaders-detail.component.html',
  styleUrls: ['./tech-leaders-detail.component.css']
})
export class TechLeadersDetailComponent implements OnInit {
  
  //these class variables will hold the properties of the object the tech-leader under consideration 
  personID:number;
  personBio:string;
  personName:string;

 //dependency injection. Inject the ActivatedRoute & Title service
  constructor(private activatedRoute:ActivatedRoute, private title:Title) { }

 //Every thing should happen OnInit i.e once the component is displayed in the view
  ngOnInit() {
    //activatedRoute returns observables, here we subscribe to the params method i.e the method that hold the url parameters
    this.activatedRoute.params
    .subscribe(res => {
      this.personID = +res['id']; //the addition object
      console.log(res);
      this.personID -=1;
      this.personBio = techLeaders[this.personID].bio;
      this.personName = techLeaders[this.personID].name;
      this.title.setTitle(this.personName);
    })
  }

}
