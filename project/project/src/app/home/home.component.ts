import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categData: Array<any> = [];

  constructor(
    private categService: CategoryService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'code.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/code.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'cog.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/cog.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'credit-card.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/credit-card.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'download.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/download.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'lock.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/lock.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'mail.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/mail.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'search.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/search.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'settings.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/settings.svg'),
      );
      this.matIconRegistry.addSvgIcon(
        'users.svg',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/users.svg'),
      );
     }

  ngOnInit(): void {
    this.categService.getCategory().subscribe((res) => {
      this.categData = res;
    })
  }

}
