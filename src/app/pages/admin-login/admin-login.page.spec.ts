import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLOGINPage } from './admin-login.page';

describe('AdminLOGINPage', () => {
  let component: AdminLOGINPage;
  let fixture: ComponentFixture<AdminLOGINPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLOGINPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
