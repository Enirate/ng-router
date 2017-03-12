import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { techLeaders } from '../../data/tech-leaders';

@Component({
  selector: 'app-tech-leaders-details',
  templateUrl: './tech-leaders-details.component.html',
  styleUrls: ['./tech-leaders-details.component.css']
})
export class TechLeadersDetailsComponent implements OnInit {

 leaderID:number;
 presonDetails:string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(res => {
      this.leaderID = +res['id'];
      console.log(this.leaderID);
      this.presonDetails = techLeaders[this.leaderID -1].bio;
    })
  }

}
