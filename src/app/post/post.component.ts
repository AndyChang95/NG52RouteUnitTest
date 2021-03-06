import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private router: Router) {
  }

  onRedirectClick() {
    this.router.navigateByUrl('comment');
  }
}
