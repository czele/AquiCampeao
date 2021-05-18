import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidalistarComponent } from './partidalistar.component';

describe('PartidalistarComponent', () => {
  let component: PartidalistarComponent;
  let fixture: ComponentFixture<PartidalistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidalistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidalistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
