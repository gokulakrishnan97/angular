import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitprofileInfoComponent } from './gitprofile-info.component';

describe('GitprofileInfoComponent', () => {
  let component: GitprofileInfoComponent;
  let fixture: ComponentFixture<GitprofileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitprofileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitprofileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
