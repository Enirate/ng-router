import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { techprenuers } from '../../data/techpreneurs';

@Component({
  selector: 'app-techpreneurs-details',
  templateUrl: './techpreneurs-details.component.html',
  styleUrls: ['./techpreneurs-details.component.css']
})
export class TechpreneursDetailsComponent implements OnInit {

  personID:number;
  presonDetails:string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(res => {
      this.personID = +res['id'];
      console.log(this.personID);
      this.presonDetails = techprenuers[this.personID - 1].bio;
    })
  }

}
