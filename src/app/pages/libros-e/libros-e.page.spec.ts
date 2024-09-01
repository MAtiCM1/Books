import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibrosEPage } from './libros-e.page';

describe('LibrosEPage', () => {
  let component: LibrosEPage;
  let fixture: ComponentFixture<LibrosEPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
