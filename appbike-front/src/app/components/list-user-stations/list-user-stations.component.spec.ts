import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserStationsComponent } from './list-user-stations.component';

describe('ListUserStationsComponent', () => {
  let component: ListUserStationsComponent;
  let fixture: ComponentFixture<ListUserStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListUserStationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListUserStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
