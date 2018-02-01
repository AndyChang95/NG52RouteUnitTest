import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { CommentComponent } from '../comment/comment.component';
import { Router } from '@angular/router';

describe('PostComponent', () => {
  let fixture: ComponentFixture<PostComponent>;
  let postComponent: PostComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        PostComponent,
        CommentComponent
      ]
    });
    fixture = TestBed.createComponent(PostComponent);
    postComponent = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(postComponent).toBeTruthy();
  });

  it(`should navigate to comment`, fakeAsync(() => {
    /** act */
    postComponent.onRedirectClick();
    tick();

    /** assert */
    expect(router.url).toEqual('/comment');
  }));
});
