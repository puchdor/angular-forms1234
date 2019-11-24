import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent  {
  genders = ['male', 'female', 'others'];
  answer = '';
  name = 'Angular';
  defaultSecret = 'teacher';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  @ViewChild('f', { static: false }) submitForm: NgForm;
  // HTMLFormElement , reemplazo por ElementRef 
  // Para acceder al objeto ngform
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.submitForm);
    this.submitted = true;
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.secretQuestion = this.submitForm.value.secret;
    this.user.answer = this.submitForm.value.questionAnswer;
    this.user.gender = this.submitForm.value.gender;

    this.submitForm.reset();
  }

  suggestUsername() {
    const suggestedUsername = 'Superuser';
    // this.submitForm.setValue({
    //   userData: {
    //     username: suggestedUsername,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'Knock knock',
    //   gender: 'female'
    // });
    this.submitForm.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    });
  }
}
