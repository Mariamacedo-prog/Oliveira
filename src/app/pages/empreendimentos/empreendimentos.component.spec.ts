import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpreendimentosComponent } from './empreendimentos.component';

describe('EmpreendimentosComponent', () => {
  let component: EmpreendimentosComponent;
  let fixture: ComponentFixture<EmpreendimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpreendimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpreendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
