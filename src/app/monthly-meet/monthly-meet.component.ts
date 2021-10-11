import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,FormArray,Validators,AbstractControl, NgControl } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from  '@angular/fire/firestore';
import { ValueTransformer } from '@angular/compiler/src/util';
 

@Component({
  selector: 'monthly-meet',
  templateUrl: './monthly-meet.component.html',
  styleUrls: ['./monthly-meet.component.css']
})
export class MonthlyMeetComponent implements OnInit {

  private submissionForm:AngularFirestoreCollection<any>;
isAvengerChecked : boolean = false;
isInceptionChecked:boolean=false;
isParasiteChecked:boolean=false;
isJokerChecked:boolean=false;
isShopliftersChecked:boolean=false
// //create 5 prop of this...
//ok
  ourForm: FormGroup;
 
  submitting:boolean=false;
  submitted:boolean=false;
  displayError: boolean = false;

 
  Data: Array<any>= [
    { name: 'avenger', value: 'Avenger' },
    { name: 'inception', value: 'Inception' },
    { name: 'parasite', value: 'Parasite' },
    { name: 'joker', value: 'Joker' },
    { name: 'shoplifters', value: 'Shoplifters' }
    
  ];
  
constructor(private fb: FormBuilder,private firestore:AngularFirestore)
{ 

}

ngOnInit():void{

    this.submissionForm=this.firestore.collection('submissions');

  
    this.ourForm =this.fb.group({
         
        fullName:['', Validators.compose([Validators.required])],

        couponCode:['', Validators.compose([Validators.required])],

        listedPartner: ['',Validators.compose([ Validators.required])],

        otoMeeting:['', Validators.compose([Validators.required])],

        yn: ['', Validators.compose([Validators.required])],
        
        // checkboxdata: ['', Validators.required],
        // checkArray: this.fb.array([],[Validators.required])

     
        
     });
     
   
  }
  get meetingForm(){
    return this.ourForm.controls;
  }


onCheckBoxChange(e:any) {
  // console.log(e);
  console.log(e.target.value);  
  switch(e.target.value) {
    case 'Avenger':
      this.isAvengerChecked = e.target.checked;
      // code block
      break;
    case 'Inception':
      this.isInceptionChecked = e.target.checked;
      // code block
      break;
    case 'Parasite':
      this.isParasiteChecked = e.target.checked;
      break;
    case 'Joker':
      this.isJokerChecked = e.target.checked;
      break;
    case 'Shoplifters':
      this.isShopliftersChecked = e.target.checked;
      break;
    default:
      break;
  //     // code block
  }
  console.log(this.isAvengerChecked, this.isInceptionChecked, this.isParasiteChecked, this.isJokerChecked, this.isShopliftersChecked);
  //   // console.log(checkArray);

  // const checkArray: FormArray = this.ourForm.get('checkArray') as FormArray;

  // if (e.target.checked) {
  //   checkArray.push(new FormControl(e.target.value));
  // } else {
  //   let i: number = 0;
  //   checkArray.controls.forEach((item: FormControl) => {
  //     if (item.value == e.target.value) {
  //       checkArray.removeAt(i);
  //       return;
  //     }
  //     i++;
  //   });
  // }

}


radioChanged(val:String){
  
        console.log(val);
}

submitForm(){
      if(this.ourForm.value.fullName == '' || this.ourForm.value.couponCode == '' || this.ourForm.value.listedPartner == '' || this.ourForm.value.yn == '') {
        this.displayError = true;
        return;
      }
             
        var arrlst = [];
        if(this.isAvengerChecked)
        {
          arrlst.push('avenger');
        }
        if(this.isInceptionChecked)
        {
          arrlst.push('inception');
        }
        if(this.isJokerChecked)
        {
          arrlst.push('joker');
        }
        if(this.isParasiteChecked)
        {
          arrlst.push('parasite');
        }
        if(this.isShopliftersChecked)
        {
          arrlst.push('shoplifters');
        }
        if(arrlst.length == 0) {
          this.displayError = true;
        return;
        }
        this.submitting=true;
        var dataToSave= {
          fullName : this.ourForm.value.fullName,
          couponCode : this.ourForm.value.couponCode,
          listedPartner : this.ourForm.value.listedPartner,
          otoMeeting : this.ourForm.value.otoMeeting,
          yn : this.ourForm.value.yn,
          checklist: arrlst
        }
        this.submissionForm.add(dataToSave).then(res=>{
          this.submitted=true;
          console.log('Data Added in Database'); 
           console.log(dataToSave); 
        }).catch(err=> console.log(err)
      ).finally(()=>{
        this.submitting=false;
      })
    }
    
}
