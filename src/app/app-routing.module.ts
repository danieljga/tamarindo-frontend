import { AddProductComponent } from './components/products/add-product/add-product.component';
import { UsersComponent } from './components/users/users.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { RawMaterialsComponent } from './components/raw-materials/raw-materials.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductCategoriesComponent } from './components/products/product-categories/product-categories.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'products/add-product', component: AddProductComponent
  },
  {
    path: 'products/edit-product', component: EditProductComponent
  },
  {
    path: 'products/categories', component: ProductCategoriesComponent
  },
  {
    path: 'raw-materials', component: RawMaterialsComponent
  },
  {
    path: 'suppliers', component: SuppliersComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
