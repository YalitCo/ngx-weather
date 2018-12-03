import { Component, Input } from '@angular/core';
import { ICitys } from './icitys';
import { ApiService } from './api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  value: string;
  url: string;

  citys: ICitys[] = [];
 
  citysArray;

  constructor(private apiService: ApiService) { }


  OnInputChange(event: any) {
    console.log(event);
    this.value = (<HTMLInputElement>event.target).value;
  }

  OnSearchClick() {
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.value + "&units=metric&APPID=7ea8f559ec5f1f0899b61c89d728a8b9";
    
    this.apiService
      .getPosts(this.url)
      .subscribe(
        //response => console.log(response)
        response => {
          
          this.citysArray = response;
          let c: ICitys = {
            name: this.citysArray.name,
            desc: this.citysArray.weather[0].description ,
            icon: "assets/pics/"+this.citysArray.weather[0].icon+".png",
            temp: this.citysArray.main.temp
          }
          this.citys.push(c);
        }
         
      );
     //console.log(this.citysArray);
    
  }


}

