import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  fetchPosts() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }
}
