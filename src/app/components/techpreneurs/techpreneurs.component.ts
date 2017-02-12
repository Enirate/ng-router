import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-techpreneurs',
  templateUrl: './techpreneurs.component.html',
  styleUrls: ['./techpreneurs.component.css']
})
export class TechpreneursComponent implements OnInit {

  techpreneursList:any[];
  constructor(private generalService:GeneralService) { }

  getTechpreneurs() {
    this.techpreneursList = this.generalService.getTechpreneurs();
  }

  ngOnInit() {
    this.getTechpreneurs();
  }

}
