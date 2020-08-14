import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }

  createPosts(body: any){
    return this.http.post(this.url, body)
  }
}
