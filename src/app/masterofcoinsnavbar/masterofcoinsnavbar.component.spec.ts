import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterofcoinsnavbarComponent } from './masterofcoinsnavbar.component';

describe('MasterofcoinsnavbarComponent', () => {
  let component: MasterofcoinsnavbarComponent;
  let fixture: ComponentFixture<MasterofcoinsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterofcoinsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterofcoinsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
