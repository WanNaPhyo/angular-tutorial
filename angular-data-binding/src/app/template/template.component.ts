import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  name:string='';
  age:number=0;
  email:string='';

  studentForm:any;

  onSave(form:NgForm){
    this.studentForm=form.value;
    console.log(form);
  }

}
