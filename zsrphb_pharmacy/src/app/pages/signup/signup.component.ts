import { Location } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit , OnChanges {

  users: Array<any> = [];

  signUpForm = this.createUser({
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
    age: 0
  })
  

  constructor(private fb: FormBuilder, private location: Location, private authService: AuthService, private userService: UserService) {

  }

  ngOnInit(): void {
      
  }

  ngOnChanges(): void {

  }

  createUser(model: User) {
    let formGroup = this.fb.group(model);

    formGroup.get('username')?.addValidators(
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60)
      ]
    );

    formGroup.get('firstname')?.addValidators(
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]
    );

    formGroup.get('lastname')?.addValidators(
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]
    );

    formGroup.get('email')?.addValidators(
      [
        Validators.required,
        Validators.maxLength(50),
        Validators.email
      ]
    );

    formGroup.get('password')?.addValidators(
      [
        Validators.required,
        Validators.minLength(8),
      ]
    );

    formGroup.get('repassword')?.addValidators(
      [
        Validators.required,
        Validators.minLength(8),
      ]
    );

    formGroup.get('age')?.addValidators(
      [
        Validators.required,
        Validators.min(13),
      ]
    );

    return formGroup;
  }

  onSubmit() {
    if(this.signUpForm.valid) {
      if(this.signUpForm.get('password')?.value == this.signUpForm.get('repassword')?.value) {
        console.log(this.signUpForm.value);
        this.authService.signup(this.signUpForm.get('email')?.value || '', this.signUpForm.get('password')?.value || '')
        .then(cred => {
          console.log(cred);

          const user: User = {
            id: cred.user?.uid as string,
            username: this.signUpForm.get('username')?.value as string,
            firstname: this.signUpForm.get('firstname')?.value as string,
            lastname: this.signUpForm.get('lastname')?.value as string,
            email: this.signUpForm.get('email')?.value as string,
            password: this.signUpForm.get('password')?.value as string,
            repassword: this.signUpForm.get('repassword')?.value as string,
            age: this.signUpForm.get('age')?.value as number
          };

          this.userService.create(user)
          .then(_ => {
            console.log('A felhasználó sikeresen hozzá lett adva az adatbázishoz.')
          })
          .catch(error =>{
            console.error(error);
          });

        })
        .catch(error => {
          console.error(error);
        })
      }
    }
  }

  goBack() {
    this.location.back();
  }
}
