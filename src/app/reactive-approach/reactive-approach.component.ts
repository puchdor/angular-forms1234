import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {
  genders = ['male', 'female', 'others'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Carlo', 'Monica'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'usernameC': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'emailC': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'genderC': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'usernameC': 'Carlos',
        'emailC': 'carlos@carlos.com'
      },
      'genderC': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'hobbies': ['sports']
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      'genderC': 'female'
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true}
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onAddHobby() {
    const control = new FormControl(null);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}