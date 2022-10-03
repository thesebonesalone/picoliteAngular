import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleaddComponent } from './articleadd.component';

describe('ArticleaddComponent', () => {
  let component: ArticleaddComponent;
  let fixture: ComponentFixture<ArticleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
