import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  user = "Santos";
  color=true;
  maDate = new Date();
 elements=[1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

  userClick(){
    console.log("clicked");
  }

}
