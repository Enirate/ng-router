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

  personID:number;
  personBio:string;
  personName:string;

  constructor(private activatedRoute:ActivatedRoute, private title:Title) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(res => {
      this.personID = +res['id'];
      this.personID -=1;
      this.personBio = techLeaders[this.personID].bio;
      this.personName = techLeaders[this.personID].name;
      this.title.setTitle(this.personName);
    })
  }

}
