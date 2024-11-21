import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      gender: ['', [Validators.required, Validators.pattern('^(М|Ж)$')]],
      birthDate: ['', [Validators.required, this.dateOfBirthValidator]],
      email: ['', [Validators.required, Validators.email]],
      website: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(\\+380|380)[0-9]{9}$')]],
      message: ['']
    });
  }

  dateOfBirthValidator(control: AbstractControl): ValidationErrors | null {
    const date = new Date(control.value);
    const today = new Date();
    return date > today ? { invalidDateOfBirth: true } : null;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.userForm.reset();
      this.userForm.markAsPristine();
      this.userForm.markAsUntouched();
    } else {
      console.error('Form is invalid');
    }
  }
}
