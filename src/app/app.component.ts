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

  //Property Binding
  isbtnDisabled: boolean = false;
  istxtHidden: boolean = false;

  // Class binding
  isActive: boolean = false;
  applyC1: boolean = true;
  // Style binding
    colorVar: string = 'purple';
    // myStyle:object = {
    //   background-color: #c3c2c2;
    // }

  // Event binding
  counter: number = 0;
  increment(){
    this.counter+=1;
  }
  decrement(){
    this.counter-=1;
  }
  name="hello";
  changeName(e:any){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value)
    this.name=e.target.value;

  }
}
