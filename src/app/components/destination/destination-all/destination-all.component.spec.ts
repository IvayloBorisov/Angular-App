import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationAllComponent } from './destination-all.component';

describe('DestinationAllComponent', () => {
  let component: DestinationAllComponent;
  let fixture: ComponentFixture<DestinationAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
