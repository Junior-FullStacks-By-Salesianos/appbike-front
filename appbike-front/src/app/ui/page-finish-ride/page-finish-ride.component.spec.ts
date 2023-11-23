import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinishRideComponent } from './page-finish-ride.component';

describe('PageFinishRideComponent', () => {
  let component: PageFinishRideComponent;
  let fixture: ComponentFixture<PageFinishRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFinishRideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFinishRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
