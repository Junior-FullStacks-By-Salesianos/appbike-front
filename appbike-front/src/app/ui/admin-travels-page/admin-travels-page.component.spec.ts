import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTravelsPageComponent } from './admin-travels-page.component';

describe('AdminTravelsPageComponent', () => {
  let component: AdminTravelsPageComponent;
  let fixture: ComponentFixture<AdminTravelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTravelsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminTravelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
