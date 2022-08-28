import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categId: any;
  categObj: any;

  postData: any;

  constructor(private categService: CategoryService,
    private postService: PostService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.categId = this.route.snapshot.paramMap.get('categId');
    this.categService.getCateg(this.categId).subscribe((res) => {
      this.categObj = res;
    })

    this.postService.getPosts().subscribe((res) => {
      this.postData = res.filter((x: { category_id: any; }) => x.category_id == this.categId);
    })
  }

}
