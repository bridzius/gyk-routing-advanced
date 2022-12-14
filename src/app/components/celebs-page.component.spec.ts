import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebsPageComponent } from './celebs-page.component';

describe('CelebsPageComponent', () => {
  let component: CelebsPageComponent;
  let fixture: ComponentFixture<CelebsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
