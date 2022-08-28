import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categData: Array<any> = [];

  constructor(
    private categService: CategoryService, private router: Router
  ) {}


  ngOnInit(): void {
    this.categService.getCategory().subscribe((res) => {
      this.categData = res;
    })
  }

}
