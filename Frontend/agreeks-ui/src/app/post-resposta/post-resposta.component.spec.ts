import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRespostaComponent } from './post-resposta.component';

describe('PostRespostaComponent', () => {
  let component: PostRespostaComponent;
  let fixture: ComponentFixture<PostRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRespostaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
