import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-weather-items',
  templateUrl: './weather-items.component.html',
  styleUrls: ['./weather-items.component.css']
})
export class WeatherItemsComponent implements OnInit {

  @Input() city: string;
  postsArray;

  // url = "https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&units=metric&APPID=7ea8f559ec5f1f0899b61c89d728a8b9";

  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getPosts()
      .subscribe(
        response => console.log(response)
       // response => this.postsArray = response
      );
  }

}
