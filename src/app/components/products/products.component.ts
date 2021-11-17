import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from './../../pipes/filter.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  faPlusCircle = faPlusCircle;
  faList = faList;
  filterProduct = '';
  color: string = 'red';
  filter: FilterPipe = new FilterPipe();

  constructor(
    public productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
