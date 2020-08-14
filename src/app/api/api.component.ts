import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  posts: any = [];
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private postService: PostsService) { 
  }
  
  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe( ( response ) => {
        this.posts = response;
      }, error => {
        alert("An unexpected error occured");
      })
  }

  create(input){
    let body = {
      title: input.value
    }
    input.value = '';
    this.postService.createPosts(body)
    //this.http.post(this.url, body)
      .subscribe( (res) => {
        this.posts.splice(0,0,res)
      }, error => {
        alert("An unexpected error occured");
      })
  }

  

}
