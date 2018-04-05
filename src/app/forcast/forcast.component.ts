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
  icon: string;

  constructor(private forcastService: ForcastService) { }
  
  ngOnInit() {}

  onSubmit(zipCode: string): void {
    this.forcastService.getForcast(zipCode).subscribe(data => {this.forcast = data; this.getWeatherIcon()});
  }

  getWeatherIcon(): void {
    /*
    Selects weather icon to display
    */

    switch(this.forcast.weather[0].icon.substring(0,2)) {
      case "02": {
        this.icon = "assets/img/few_clouds.png"
        break;
      }
      case "03": {
        this.icon = "assets/img/scattered_clouds.png";
        break;
      }
      case "04": {
        this.icon = "assets/img/scattered_clouds.png";
        break;
      }
      case "09": {
        this.icon = "assets/img/shower_rain.png";
        break;
      }
      case "10": {
        this.icon = "assets/img/rain.png";
        break;
      }
      case "11": {
        this.icon = "assets/img/tunderstorm.png";
        break;
      }
      case "13": {
        this.icon = "assets/img/snow.png";
        break;
      }
      case "50": {
        this.icon = "assets/img/mist.png"
        break;
      }
      default: {
        this.icon = "assets/img/clear_sky_day.png";
        break;
      }
    }
  }
}
