import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Admin } from './../../models/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    adminName: new FormControl(''),
    password: new FormControl(''),
  });
  // admins: Array<Admin> = [];
  Name: string = '';

  subscriber: any;

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  // registerUserData = { adminName: '', password: '' };
  ////////////////////////////////////
  admins = { adminName: '', password: '' };

  ////////////////////////////////////////////
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get adminName() {
    return this.loginForm.get('adminName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginAdmin() {
    this.loginForm.value.adminName;
    this.loginForm.value.password;
  }

  onSubmit() {
    this.subscriber = this.adminService
      .getAdminByName(this.loginForm.value)
      .subscribe(
        (response: any) => {
          this.admins = response.adminName;
          console.log(response);
          this.router.navigate(['admin/panel']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
