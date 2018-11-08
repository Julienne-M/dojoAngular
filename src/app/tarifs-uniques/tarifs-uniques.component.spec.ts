import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsUniquesComponent } from './tarifs-uniques.component';

describe('TarifsUniquesComponent', () => {
  let component: TarifsUniquesComponent;
  let fixture: ComponentFixture<TarifsUniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifsUniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifsUniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
