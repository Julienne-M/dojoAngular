import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsTranspoleComponent } from './tarifs-transpole.component';

describe('TarifsTranspoleComponent', () => {
  let component: TarifsTranspoleComponent;
  let fixture: ComponentFixture<TarifsTranspoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifsTranspoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifsTranspoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
