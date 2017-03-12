import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service'; //import GeneralService
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech-leaders',
  templateUrl: './tech-leaders.component.html',
  styleUrls: ['./tech-leaders.component.css']
})
export class TechLeadersComponent implements OnInit {

techLeadersList:any[];
  constructor(private generalService:GeneralService, private activatedRoute: ActivatedRoute) { } //dependency injection i.e we inject our service as a dependency

getTechLeaders() {
  this.techLeadersList = this.generalService.getTechLeaders(); // we fetch tech leaders list from our service
}

  ngOnInit() {
    this.getTechLeaders() //we run getTechLeaders method on init(ialization of this component).
  }

}
