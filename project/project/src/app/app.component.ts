import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  keyword: any;

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  search(event: any) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    {
      let temp = this.keyword
      this.keyword = "";
      this.router.navigate(['/search/'+temp], { relativeTo: this.route });

    });

  }
}
