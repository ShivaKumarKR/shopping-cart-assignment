import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class HomePageResolver implements Resolve<any> {

  constructor(private home: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return forkJoin([this.home.getBannerDetails(), this.home.getCategories()]).pipe(
      map((response) => {
        return {
          bannerDetails: response[0],
          categories: response[1]
        }
      })
    );
  }
}
