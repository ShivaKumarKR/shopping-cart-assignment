import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  activeProducts: any[];
  allProducts: any;
  categories: Observable<any>;
  activeCategory: any="";

  constructor(private productService: ProductService, private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.productService.getProducts().subscribe((data: any[]) => {
      this.route.queryParams.subscribe((query: Params) => {
        this.activeCategory = query.category || '';
      })
      this.allProducts = data;
      //this.activeProducts = this.activeCategory ? data.filter(x => x.category == this.activeCategory) : data;
    });

  }

  get products() {
    return this.activeCategory ? this.allProducts.filter(x => x.category == this.activeCategory) : this.allProducts;
  }

  updateCategory(id: string): void {
    if (this.activeCategory === id || id === '') {
      this.router.navigate(['/product']);
    } else {
      this.router.navigate(['/product'], {queryParams: {category: id}});
    }
  }

  addToCart(item){
    this.cartService.updateCart(item, "Add");
  }

}
