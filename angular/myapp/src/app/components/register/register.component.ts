import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {fname:'',lname:'',email:'',password:''}
  // constructor(private _auth:AuthService,private _router:Router) { }
  constructor(private modalService: NgbModal,private fb:FormBuilder , private auth:AuthService , private router:Router) { }
  ngOnInit(): void {
  }

  registerUser() {
    // this._auth.registerUser(this.registerUserData)
    // .subscribe(
    //   res => {
    //     localStorage.setItem('token', res.token)
    //     this._router.navigate(['/special'])
    //     console.log(res)
    //   },
    //   err => console.log(err)
    // )  
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        localStorage.setItem('token' , res.token)
        localStorage.setItem('id' , res.userId)
        this.router.navigate(['/home'])
        console.log(res);
        
      },
      err => console.log(err)
    )
       console.log(this.registerUserData);
       
  }
  closeResult = '';

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get name() { return this.registerationForm.get('firstName'); }
  get lname() { return this.registerationForm.get('lastName'); }
  get email() { return this.registerationForm.get('email'); }
  get password() { return this.registerationForm.get('password'); }
  get f() { return this.registerationForm.controls; }
  
  registerationForm = this.fb.group({
    firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required]]
  },{
    validator:this.MustMatch('password','confirmPassword')
  })

  MustMatch(controlName:string,matchingControlName:string){

    return (formGroup:FormGroup) =>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return
      }
       if (control.value !== matchingControl.value) {
           matchingControl.setErrors({ mustMatch: true });
        }else{ matchingControl.setErrors(null); }
  }
}

  onSubmit() {
    // this.users.push({name:this.name?.value,age:this.age?.value})
    // console.log(this.users)
    this.registerUserData.fname = this.name?.value
    this.registerUserData.lname = this.lname?.value
    this.registerUserData.email = this.email?.value
    this.registerUserData.password = this.password?.value
    this.registerUser()
  }
  // loginUserData = {email:'',password:''}
  
}
