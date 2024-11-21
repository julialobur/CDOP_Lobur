import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('повинен створити компонент', () => {
    expect(component).toBeTruthy();
  });

  it('повинен мати заголовок "My Angular App"', () => {
    expect(component.title).toEqual('My Angular App');
  });

  it('повинен відображати заголовок у h1', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('My Angular App');
  });

  it('повинен оновити заголовок після зміни значення title', () => {
    component.title = 'Новий заголовок';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Новий заголовок');
  });

  it('повинен містити компонент <app-user-form>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-user-form')).toBeTruthy();
  });
});