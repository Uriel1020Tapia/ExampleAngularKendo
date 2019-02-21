import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Posts } from 'main/homegrid/posts';

@Component({
  selector: 'app-homegrid',
  templateUrl: './homegrid.component.html',
  styleUrls: ['./homegrid.component.scss']
})
export class HomegridComponent implements OnInit {

  title = 'Windstorm';
  posts: any;
  listPosts: Posts[];
  constructor(private mainService: MainService) { }

  getPosts() {
    this.mainService.getPosts().subscribe((posts) =>    {
      this.posts = posts;
      console.log(this.posts);

    });

  }
  ngOnInit() {
    this.mainService.getPosts().subscribe(listPosts => this.listPosts = listPosts);
  }

}
