import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormArray,Validators } from '@angular/forms';


@Component({
  selector: 'app-meet-app',
  templateUrl: './meet-app.component.html',
  styleUrls: ['./meet-app.component.css']
})
export class MeetAppComponent implements OnInit {
  
  ourForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.ourForm=new FormGroup({
    //   fullName: new FormControl();
    }
    
    

}
