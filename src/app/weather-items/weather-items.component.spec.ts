import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherItemsComponent } from './weather-items.component';

describe('WeatherItemsComponent', () => {
  let component: WeatherItemsComponent;
  let fixture: ComponentFixture<WeatherItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
