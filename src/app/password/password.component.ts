import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GenerictemplateService } from '../generictemplate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  constructor(
    private genericService: GenerictemplateService,
    private router: Router
  ) {}
  showError = false;
  password: string | undefined;
  showPassword: boolean = false;
  inputType: string = 'password';
  // password === '2255'
  secretePswd = '8245';

  ngOnInit(): void {}

  togglePasswordVisibility(param: boolean) {
    this.showPassword = param;
    if (this.showPassword) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }
  onSubmit(form: NgForm) {
    const password = form.value.password;
    if (form.valid) {
      if (
        password === this.secretePswd ||
        password === this.genericService.secretePassword
      ) {
        this.showError = false;
        localStorage.setItem('password', password);
        const currentPath = localStorage.getItem('currentPath') ?? '/details';
        this.router.navigate([currentPath]);
      } else {
        this.showError = true;
      }
    } else {
      this.showError = true;
    }
  }
}
