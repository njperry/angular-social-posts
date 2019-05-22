import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post'

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  show: boolean = false;

  posts: Post[] = [
    {
      title: "Dog",
      thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"
    },
    {
      title: "Cat",
      thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"
    },
    {
      title: "Bird",
      thought: "jh ajd cjkd sc ajkf dha dohcd sk ljha sd fds lkfhs adlk sdjf ha lsd khf ;alk sdj skdf h;adls khf;sa lkdh lads hfl ksd hfkhf; lskdhf"
    }
  ]

  onSubmit(post:Post): void {
    this.posts.unshift(post);
    this.show = false;
    console.log(this.posts);
  }

  toggleForm(): void {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit() {
  }

}
