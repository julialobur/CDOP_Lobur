import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('форма повинна бути недійсною, якщо fullName порожнє', () => {
    component.userForm.get('fullName')?.setValue('');
    expect(component.userForm.get('fullName')?.invalid).toBeTruthy();
  });

  it('форма повинна бути недійсною, якщо username містить не лише латинські літери', () => {
    component.userForm.get('username')?.setValue('Ivan123');
    expect(component.userForm.get('username')?.invalid).toBeTruthy();
  });

  it('форма повинна бути дійсною, якщо username містить тільки латинські літери', () => {
    component.userForm.get('username')?.setValue('Ivan');
    expect(component.userForm.get('username')?.valid).toBeTruthy();
  });

  it('форма повинна бути недійсною, якщо gender не М або Ж', () => {
    component.userForm.get('gender')?.setValue('X');
    expect(component.userForm.get('gender')?.invalid).toBeTruthy();
  });

  it('форма повинна бути дійсною, якщо gender встановлений як М або Ж', () => {
    component.userForm.get('gender')?.setValue('М');
    expect(component.userForm.get('gender')?.valid).toBeTruthy();
  });

  it('форма повинна бути недійсною, якщо birthDate у майбутньому', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    component.userForm.get('birthDate')?.setValue(futureDate.toISOString().split('T')[0]);
    expect(component.userForm.get('birthDate')?.invalid).toBeTruthy();
  });

  it('форма повинна бути дійсною, якщо birthDate у минулому', () => {
    component.userForm.get('birthDate')?.setValue('1990-01-01');
    expect(component.userForm.get('birthDate')?.valid).toBeTruthy();
  });

  it('форма повинна бути недійсною, якщо email має неправильний формат', () => {
    component.userForm.get('email')?.setValue('invalid-email');
    expect(component.userForm.get('email')?.invalid).toBeTruthy();
  });

  it('форма повинна бути недійсною, якщо phone не відповідає формату', () => {
    component.userForm.get('phone')?.setValue('123456');
    expect(component.userForm.get('phone')?.invalid).toBeTruthy();
  });

  it('форма повинна бути дійсною при коректних даних у всіх полях', () => {
    component.userForm.setValue({
      fullName: 'Іванов Іван Іванович',
      username: 'Ivan',
      gender: 'М',
      birthDate: '1990-01-01',
      email: 'test@example.com',
      website: 'http://example.com',
      creditCard: '1234-5678-1234-5678',
      phone: '+380123456789',
      message: 'Це приклад повідомлення'
    });
    expect(component.userForm.valid).toBeTruthy();
  });
});
