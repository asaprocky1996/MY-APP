import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  public userForm: FormGroup=new FormGroup({
    name:new FormControl(),
    class:new FormControl(),
    fatherName:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    marks: new FormArray([]),
    type:new FormControl(),
})
get marksFormArray(){
  return this.userForm.get('marks') as FormArray;
}

constructor(){
  this.userForm.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholar'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl('hostelFee');
      }else{
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl('busFee');
      }
    }
  )
}
marks(){
  this.marksFormArray.push(
    new FormGroup({
      class:new FormControl(),
      year:new FormControl(),
      percentage:new FormControl() 
    })
  )
}
deletemarks(i:number){
  this.marksFormArray.removeAt(i);
}
create(){
  console.log(this.userForm);
}

}
