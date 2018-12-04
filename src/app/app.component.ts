import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ICitys } from './icitys';
import { ApiService } from './api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  input_value: string;

  url: string;

  citys: ICitys[] = [];

  citysArray;

  //lcity: string; //local city

  show: boolean = false; // show modal box for error

  @ViewChild('inputSearch') inputSearch: ElementRef;

  constructor(private apiService: ApiService) {
    for (let i = 0; i < localStorage.length; i++) {
      let c: string = 'city' + i;
      this.localCity(localStorage.getItem(c));
    }
  }

  localCity(local_city: string) {
    //alert("im in");
    if (local_city != '') {
      this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + local_city + "&units=metric&APPID=7ea8f559ec5f1f0899b61c89d728a8b9";

      this.apiService
        .getPosts(this.url)
        .subscribe(
          //response => console.log(response)
          response => {

            this.citysArray = response;
            let c: ICitys = {
              name: this.citysArray.name,
              desc: this.citysArray.weather[0].description,
              icon: "assets/pics/" + this.citysArray.weather[0].icon + ".png",
              temp: Math.round(this.citysArray.main.temp)
            }
            this.citys.push(c);
          },
          error => {
            //this.show = true; //show modal error
            this.input_value = "";
            this.inputSearch.nativeElement.value = ''; //empty input value

          }

        );
    }
    //if input == empty
    else {
      this.show = true; //show modal error
      this.input_value = "";
      this.inputSearch.nativeElement.value = ''; //empty input value
    }
  }

  OnInputChange(event: any) {
    //console.log(event);
    this.input_value = (<HTMLInputElement>event.target).value;
  }

  OnSearchClick() {
    if (this.input_value != '') {
      this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.input_value + "&units=metric&APPID=7ea8f559ec5f1f0899b61c89d728a8b9";

      this.apiService
        .getPosts(this.url)
        .subscribe(
          //response => console.log(response)
          response => {

            this.citysArray = response;
            let c: ICitys = {
              name: this.citysArray.name,
              desc: this.citysArray.weather[0].description,
              icon: "assets/pics/" + this.citysArray.weather[0].icon + ".png",
              temp: Math.round(this.citysArray.main.temp)
            }
            this.citys.push(c);


            for (let i = 0; i < this.citys.length; i++) {
              localStorage.setItem('city' + i, this.citys[i].name);
            }

            this.input_value = "";
            this.inputSearch.nativeElement.value = '';
          },
          error => {
            this.show = true; //show modal error
            this.input_value = "";
            this.inputSearch.nativeElement.value = ''; //empty input value

          }

        );
    }
    //if input == empty
    else {
      this.show = true; //show modal error
      this.input_value = "";
      this.inputSearch.nativeElement.value = ''; //empty input value
    }

  }



}

