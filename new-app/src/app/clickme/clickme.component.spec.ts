import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickmeComponent } from './clickme.component';

describe('ClickmeComponent', () => {
  let component: ClickmeComponent;
  let fixture: ComponentFixture<ClickmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
