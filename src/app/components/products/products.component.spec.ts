import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductService } from './../../services/product.service';
import { ProductsComponent } from './products.component';
import { FilterPipe } from './../../pipes/filter.pipe';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ProductsComponent, FilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // const service: ProductService = TestBed.inject(ProductService);
    expect(component).toBeTruthy();
  });

  it('should call getProducts and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ProductService);
    let spy_getPosts = spyOn(service,"getProducts").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getProducts();
    tick(100);
    expect(component.products).toEqual([]);
  }));

  it('should call getProducts and get response as array', fakeAsync(() => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(ProductService);
    let spy_getPosts = spyOn(service,"getProducts").and.callFake(() => {
      return Rx.of([{id:1, reference:'producto 1'}]).pipe(delay(100));
    });
    component.getProducts();
    tick(100);
    expect(component.products).toEqual([{id:1, reference:'producto 1'}]);
  }))

});
