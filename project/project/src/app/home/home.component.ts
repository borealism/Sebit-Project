import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categData: Array<any> = [];

  constructor(private categService: CategoryService) { }

  ngOnInit(): void {
    this.categService.getCategory().subscribe((res) => {
      this.categData = res;
    })
  }

}
