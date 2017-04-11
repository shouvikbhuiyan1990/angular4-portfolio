import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  pageLoaded:boolean =  false;
  constructor() { }

  ngOnInit() {
    setTimeout(
      ()=>{
        this.pageLoaded = true;
      },200
    )
  }
}
