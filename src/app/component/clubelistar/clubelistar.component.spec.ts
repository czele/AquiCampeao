import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubelistarComponent } from './clubelistar.component';

describe('ClubelistarComponent', () => {
  let component: ClubelistarComponent;
  let fixture: ComponentFixture<ClubelistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubelistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubelistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
