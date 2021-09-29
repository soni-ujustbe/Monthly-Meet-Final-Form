import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormArray,Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/firestore';


// import {meet} from '../monthly-meet.model';
//import * as validUlr from 'valid-url';


@Component({
  selector: 'monthly-meet',
  templateUrl: './monthly-meet.component.html',
  styleUrls: ['./monthly-meet.component.css']
})
export class MonthlyMeetComponent implements OnInit {

  private submissionForm:AngularFirestoreCollection<any>;

  ourForm: FormGroup;
 
  submitting:boolean=false;
  submitted:boolean=false;


 
  Data: Array<any>= [
    {id:1, name: 'avenger', value: 'Avenger' },
    {id:2, name: 'inception', value: 'Inception' },
    {id:3, name: 'parasite', value: 'Parasite' },
    {id:4, name: 'joker', value: 'Joker' },
    {id:5, name: 'shoplifters', value: 'Shoplifters' }
    
  ];
constructor(private fb: FormBuilder,private firestore:AngularFirestore)
{ 
//   // this.ourForm=this.fb.group({
//   //   fullName:new FormControl(null,[Validators.required]),

//   //   couponCode: new FormControl( '',[ Validators.required]),

//   //   listedPartner:new FormControl('', [Validators.required]),

//   //   otoMeeting:new FormControl('',[Validators.required]),

//   //   yn: new FormControl('', [Validators.required]),
    
//   //   emailFormArray:this.fb.array([],[Validators.required])

//   // })
}
// 90% code write one few mistake 
// right now i,m busy 

//what time will u free can u please tell me

//please call me at 7PM and 
//ok sir thank u
// with maintain your net...

ngOnInit():void{

    this.submissionForm=this.firestore.collection('submissions');
  
    this.ourForm =this.fb.group({
         
        fullName: ['', Validators.required],

        couponCode: ['', Validators.required],

        listedPartner: ['', Validators.required],

        otoMeeting: ['', Validators.required],

        yn: ['', Validators.required],
        
        check: ['', Validators.required],
        // emailFormArray:this.fb.array([],[Validators.required])


     });
     
   
  }
  get meetingForm(){
    return this.ourForm.controls;
  }
//   // get currentMeet() {
//   //    return JSON.stringify(this.model);
//   //    }
// // this.value=fb.collection('submissions').valueChanges();

onCheckBoxChange(checkval:any){

  console.log(checkval);
  // const _id=id["id"]

  // const name=id["name"]
  // const emailFormArray= <FormArray>this.ourForm.controls.checkArray;
  //  const checkArray:FormArray=this.ourForm.get('checkArray') as FormArray;
  
  // if(e.isChecked){
  //   emailFormArray.push(new FormControl({id}));
   
  //    checkArray.push(new FormControl(e.target.value));
      
  // }else{

  //  let index= emailFormArray.findIndex(x => x.value == {id});
  //   checkArray.removeAt(index);
    // let i: number=0;
    // checkArray.controls.forEach((item :FormControl)=>{
    //   if(item.value == e.target.value){
    //     checkArray.removeAt(i);
    //     return;
    //   }  
    //   i++;
   // })
   // }
 // console.log(checkval);
//please show the task bar
}

 // submitForm(){
// this.submitted=true;
// console.log(this.ourForm.value);
 // } 
// 
radioChanged(val:String){
  
        console.log(val)
      }

  submitData(value:any){
       // console.log(this.submitted);
        
      // this.fb.list('value').push({check:this.});
      // this.value='';
        this.submitting=true; 
        this.submissionForm.add(value).then(res=>{
          this.submitted=true;
          console.log('Data Added in Database'); 
           console.log(value); 
        }).catch(err=> console.log(err)
      ).finally(()=>{
        this.submitting=false;
      })

      }
    


}
