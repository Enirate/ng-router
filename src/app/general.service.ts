import { Injectable } from '@angular/core';

import { techLeaders } from './data/tech-leaders'; //import techLeaders array 
import { techprenuers } from './data/techpreneurs'; //import techpreneurs array

@Injectable()
export class GeneralService {

  constructor() { }

  getTechLeaders(){
    return techLeaders; //return techLeaders array of objects
  }

  getTechpreneurs(){
    return techprenuers; //return techpreneurs array of objects.
  }



}
