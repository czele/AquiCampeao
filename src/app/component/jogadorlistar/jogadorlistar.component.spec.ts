import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorlistarComponent } from './jogadorlistar.component';

describe('JogadorlistarComponent', () => {
  let component: JogadorlistarComponent;
  let fixture: ComponentFixture<JogadorlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogadorlistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
