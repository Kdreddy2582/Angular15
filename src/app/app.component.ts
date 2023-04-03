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
  //Two way binding in Angular
  cityName: string = "Hyderabad"
  bindDate(){
    this.cityName = "Vizag"
  }
  // Directives in Angular
  isShow = false;
  studentList = ["Ramu", "Guru", "Deva", "Giri", "Brama"]
  // NgiF Statements
  isHeader =  true;
  data = "";
  //data = ["Vizag", "Srikakulam", "Vizainagaram"]

  // NgFor Statements
  nums = [1,2,3,4,5,6,7,8,9,10]
  empTable = [
    {
      empID: "101",
      empName: "Devender",
      jobTitle: "UI Developer",
      experiance: "5 years",
      location: "Hyderabad"
    },
    {
      empID: "102",
      empName: "Lalitha",
      jobTitle: "Java Developer",
      experiance: "3 years",
      location: "Vizag"
    },
    {
      empID: "103",
      empName: "Sushmitha",
      jobTitle: "PHP Developer",
      experiance: "6 years",
      location: "Hyderabad"
    },
    {
      empID: "104",
      empName: "Ramana",
      jobTitle: "Dotnet Developer",
      experiance: "4 years",
      location: "Babgalure"
    },
    {
      empID: "105",
      empName: "Bheema",
      jobTitle: "UI Developer",
      experiance: "2 years",
      location: "Srikakulam"
    }
  ]

}
