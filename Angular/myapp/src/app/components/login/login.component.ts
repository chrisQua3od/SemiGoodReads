import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerUserData = {fname:'',lname:'',email:'',password:''}
  constructor(private fb:FormBuilder , private auth:AuthService ,private router:Router) { }

  ngOnInit(): void {
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


registerUser() {
  this.auth.registerUser(this.registerUserData)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this.router.navigateByUrl('')
      console.log(res)
    },
    err => console.log(err)
  )  
     
}
  onSubmit(){
    this.registerUserData.fname = this.name?.value
    this.registerUserData.email = this.email?.value
    this.registerUserData.password = this.password?.value
    this.registerUserData.lname = this.lname?.value
    this.registerUser()
    console.log(this.registerUserData)
  }

}
