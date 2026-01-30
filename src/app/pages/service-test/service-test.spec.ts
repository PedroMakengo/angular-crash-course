import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTest } from './service-test';

describe('ServiceTest', () => {
  let component: ServiceTest;
  let fixture: ComponentFixture<ServiceTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
