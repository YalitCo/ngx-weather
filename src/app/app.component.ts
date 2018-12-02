import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '';
  counts=['city_1','city_2'];
  //value='';
  value:string;


  OnInputChange(event:any){
    console.log(event);
    this.value=(<HTMLInputElement>event.target).value;
  }

  OnSearchClick(){
    this.counts.push(this.value);
  }
  
}

