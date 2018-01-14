import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProvidersComponent } from './shared-providers.component';

describe('SharedProvidersComponent', () => {
  let component: SharedProvidersComponent;
  let fixture: ComponentFixture<SharedProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
