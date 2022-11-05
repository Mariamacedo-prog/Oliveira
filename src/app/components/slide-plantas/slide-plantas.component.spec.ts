import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePlantasComponent } from './slide-plantas.component';

describe('SlidePlantasComponent', () => {
  let component: SlidePlantasComponent;
  let fixture: ComponentFixture<SlidePlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidePlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
