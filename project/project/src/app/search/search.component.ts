import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postData: any;
  keyword: any;


  constructor(private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.keyword = this.route.snapshot.paramMap.get('keyword');
    this.postService.getPosts().subscribe((res) => {
      debugger;
      this.postData = res.filter((x: { title: string; description: string;  }) =>  x.title.includes(this.keyword) || x.description.includes(this.keyword));
      debugger;
    })
  }

}
