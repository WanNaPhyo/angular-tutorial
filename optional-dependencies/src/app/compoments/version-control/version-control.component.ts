import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-version-control',
  templateUrl: './version-control.component.html',
  styleUrls: ['./version-control.component.scss']
})
export class VersionControlComponent implements OnInit{

  versionForm = new FormGroup({
    version:new FormControl('')
  })

  versionName = '0.0.0';

  ngOnInit(): void {
   this.versionForm.get('version')?.setValue(this.versionName);
  }

  formSubmit(){
    if(!this.versionForm.valid){
      alert('Invalid version value.Please use symatic version.');
      return;
    }
    //this.versionName= ""
    this.versionName = this.versionForm.get('version')?.value as string;

  }

}

