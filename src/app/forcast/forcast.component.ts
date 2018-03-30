import { Component, OnInit } from '@angular/core';

import { Forecast } from '../forcast';
import { ForcastService} from '../forcast.service';


@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit {

  forcast: Forecast;

  constructor(private forcastService: ForcastService) { }
  
  ngOnInit() {
    this.getTest();
  }

  getTest(): void {
    this.forcastService.getForcast().subscribe(data => this.forcast = data);
  }

}
