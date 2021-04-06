import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getBannerDetails() {
    return this.http.get(this.baseUrl + 'banners').pipe(
      map((banners: any[]) => banners
        .filter(banner => banner.isActive)
        .sort((banner, previousBanner) => banner.order - previousBanner.order)
      )
    )
  }

  getCategories() {
    return this.http.get(this.baseUrl + 'categories').pipe(
      map((categories: any[]) => categories
        .filter(category => category.enabled)
        .sort((category, previousCategory) => category.order - previousCategory.order)
      )
    );
  }

  getProducts() {
    return this.http.get(this.baseUrl + 'products')
  }
}
