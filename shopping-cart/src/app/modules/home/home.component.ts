import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  banners: any;
  categories: any;
  @Input() isLeftAlign = false;

  constructor(private home: ProductService, private router: Router, private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.banners = this.route.snapshot.data.homePageDetails.bannerDetails;
    this.categories = this.route.snapshot.data.homePageDetails.categories;
    /* this.banners = this.home.getBannerDetails();
    this.categories = this.home.getCategories(); */
  }

  redirectToProducts(id: string): void {
    this.router.navigate(['/product'], {queryParams: {category: id}});
  }

}
