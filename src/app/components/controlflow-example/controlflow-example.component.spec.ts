import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowExampleComponent } from './controlflow-example.component';

describe('ControlflowExampleComponent', () => {
  let component: ControlflowExampleComponent;
  let fixture: ComponentFixture<ControlflowExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
