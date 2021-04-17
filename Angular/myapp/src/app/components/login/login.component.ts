import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = { email: '', password: '' }
  userId: any = ''

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    // if(this.auth.loggedIn()){
    //   this.router.navigateByUrl('/home');
    // }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  loginClicked() {
    this.loginUserData.email = this.email?.value
    this.loginUserData.password = this.password?.value
    console.log(this.loginUserData);
    this.showIcon(true)
    this.loginUser()
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          localStorage.setItem('id', res.userId)
          this.router.navigate(['/home'])

          console.log(res);

        },
        err => console.log(err)
      )
  }

  @Output() logoutIcon = new EventEmitter<boolean>();

  showIcon(value: boolean) {
    this.logoutIcon.emit(value);
    console.log('trueeeeeee');

  }
}
