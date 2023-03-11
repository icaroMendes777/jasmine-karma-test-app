import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { FirstComponent } from './first.component';

import { By } from '@angular/platform-browser';


describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ FirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve somar as props 1 e 2', () => {

    let sum = component.propOne + component.propTwo;
    expect(component.sum()).toBe(sum);
  });

  it('deve incrementar prop 1', () => {
    let newValue = component.propOne + 1;
    component.incrementProp1();
    expect(component.propOne).toBe(newValue);
  });

  it('Deve prencher campos do formulario e mostrar no output', () => {
    let input = fixture.debugElement.query(By.css('input')).nativeElement
    input.value = 'Danilo'
    input.dispatchEvent(new Event('input'))

    expect(input.value).toBe('Danilo')

    let output = fixture.debugElement.query(By.css('#output')).nativeElement

    fixture.detectChanges();
    expect(output.innerHTML).toBe('Danilo');
  })

});
