import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxBootstrapTreeviewModule } from 'ngx-bootstrap-treeview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RawMaterialsComponent } from './components/raw-materials/raw-materials.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { UsersComponent } from './components/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { ProductCategoriesComponent } from './components/products/product-categories/product-categories.component';
import { SupplierDetailComponent } from './components/suppliers/supplier-detail/supplier-detail.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ClothStyleDirective } from './directives/cloth-style.directive';
import { CheckSuppliersDirective } from './directives/check-suppliers.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    NavbarComponent,
    RawMaterialsComponent,
    SuppliersComponent,
    UsersComponent,
    AddProductComponent,
    EditProductComponent,
    ProductCategoriesComponent,
    SupplierDetailComponent,
    FilterPipe,
    ClothStyleDirective,
    CheckSuppliersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxBootstrapTreeviewModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
