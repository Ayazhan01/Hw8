import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  comments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  fetchComments() {
    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts/${this.post.id}/comments`).subscribe(comments => {
      this.comments = comments;
    });
  }
}
