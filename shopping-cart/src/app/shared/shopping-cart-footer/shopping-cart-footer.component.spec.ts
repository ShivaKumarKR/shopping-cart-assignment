import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartFooterComponent } from './shopping-cart-footer.component';

describe('ShoppingCartFooterComponent', () => {
  let component: ShoppingCartFooterComponent;
  let fixture: ComponentFixture<ShoppingCartFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
