import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLogComponent } from './splash-log.component';

describe('SplashLogComponent', () => {
  let component: SplashLogComponent;
  let fixture: ComponentFixture<SplashLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
