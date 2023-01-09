import { Component, OnInit } from '@angular/core';

enum Visiblity{
  On = 'on',
  Off = 'off'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  ngOnInit(): void {
   this.setVisiblity(this.VISIBLITY.Off);
  }


  title = 'if-not-directives';


  visiblity !: Visiblity;
  VISIBLITY = Visiblity;

  setVisiblity(value:Visiblity){
    this.visiblity = value;
  }

}
