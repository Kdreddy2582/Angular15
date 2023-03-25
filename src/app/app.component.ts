import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'fitpro';
  message = "Hello Angular";
  saySomeThing = " Hello World";
  city:string ="Hyderabad";
  imgPath: string = "../assets/pongal-whishes.jpg";
  saySomethingCls: string = "special pecial";
  //customDate: Date = new Date();
  //customDate: string = new Date().toLocaleDateString();
  customDate: string = new Date().toLocaleTimeString();

  timeid = setInterval(() => {
    this.customDate = new Date().toLocaleTimeString();
  }, 1000);

  test(){
    return 200
  };
  isDisabled: boolean = false;
  isHidden: boolean =false;
}

