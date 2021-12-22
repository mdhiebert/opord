import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpordTemplateComponent } from './opord-template.component';

describe('OpordTemplateComponent', () => {
  let component: OpordTemplateComponent;
  let fixture: ComponentFixture<OpordTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpordTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpordTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
