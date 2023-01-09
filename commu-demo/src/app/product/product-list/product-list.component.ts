import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input()
  productList:Product[] = []

  @Output()
  selectedproduct = new EventEmitter<Product>

  constructor(){}

  onSelect(index:number){
    let product=this.productList.at(index)
    this.selectedproduct.emit(product)
  }

}
