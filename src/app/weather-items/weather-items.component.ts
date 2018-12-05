import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-items',
  templateUrl: './weather-items.component.html',
  styleUrls: ['./weather-items.component.css']
})

export class WeatherItemsComponent implements OnInit {

  @Input() city: string;

  ngOnInit() {

  }

}
