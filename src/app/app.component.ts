import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/firestore'
// import { format } from 'path';
// import * as validUlr from 'valid-url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
//   private submissionForm:AngularFirestoreCollection<any>;
//   //ourForm:[];
// constructor(private fb: FormBuilder,private firestore:AngularFirestore){}


  title = 'dynamic-form';
  ourForm: FormGroup;

//   submitting=false;
//  submitted=false;
Data: Array<any>= [
    {id:1, name: 'avenger', value: 'Avenger' },
    {id:2, name: 'inception', value: 'Inception' },
    {id:3, name: 'parasite', value: 'Parasite' },
    {id:4, name: 'joker', value: 'Joker' },
    {id:5, name: 'shoplifters', value: 'Shoplifters' }
    
  ];

    ngOnInit():void{
//       this.submissionForm=this.firestore.collection('submissions');
//       this.ourForm =this.fb.group({

//           email: ['',[Validators.required,  Validators.email]],

//           fullName: ['', Validators.required],

//           track: ['', Validators.required],

//           screenshots: ['', [Validators.required, this.isValidURL]],

//           GithubURL: [''],

//           feedback: ['', Validators.required]
//       });

     
    }
//     get meetingForm(){
//       return this.ourForm.controls;
//     }
//     trackChanged(val:string){
//       console.log(val);
      
//       const GithubURLControl=this.meetingForm.GithubURL;
//       if(val === 'Android'){
//         GithubURLControl.setValidators([Validators.required,this.isValidURL]);
//       }else{
//         GithubURLControl.clearValidators();
//       }
//       GithubURLControl.updateValueAndValidity();

//     }


//     isValidURL(control:FormControl):{[key:string]:boolean} | null {
//       if(control.value.lenght>1 && !validUlr.isHttpUri(control.value)){
//         return { validURL:true };
//       }
//       return null;
//     }
//     submitData(value:any){
//       console.log(this.submitted);
  
//       this.submitting=true; 
//       this.submissionForm.add(value).then(res=>{
//         this.submitted=true;
//         console.log('Data Added in Database'); 
//         //  console.log(value); 
//       }).catch(err=> console.log(err)
//     ).finally(()=>{
//       this.submitting=false;
//     })

//     }

}
