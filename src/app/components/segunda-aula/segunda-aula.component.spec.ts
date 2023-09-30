import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaAulaComponent } from './segunda-aula.component';

describe('SegundaAulaComponent', () => {
  let component: SegundaAulaComponent;
  let fixture: ComponentFixture<SegundaAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundaAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
