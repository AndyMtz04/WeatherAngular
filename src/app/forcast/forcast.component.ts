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
  submited: boolean;

  constructor(private forcastService: ForcastService) { }
  
  ngOnInit() {}

  onSubmit(zipCode: string): void {
    this.forcastService.getForcast(zipCode).subscribe(data => this.forcast = data);
  }
}
