import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId: any;
  postObj: any;

  postData: any;

  constructor(private postService: PostService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.postId = this.route.snapshot.paramMap.get('postId');
    this.postService.getPost(this.postId).subscribe((res) => {
      this.postObj = res;
    })
  }

}
