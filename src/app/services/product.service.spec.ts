import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ProductService', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should set products', () => {
    const service: ProductService = TestBed.inject(ProductService);
    const dummyProducts = { data: [{ id:1, reference:'producto 1' }, { id:2, reference:'producto 2' }] };

    service.getProducts().subscribe(products => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyProducts.data);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}/products`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProducts);
  });
});
