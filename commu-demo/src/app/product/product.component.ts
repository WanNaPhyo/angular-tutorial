import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  form:FormGroup

  list: Product[] = [
    {
      name: 'Sushi',
      price: 3000,
      description: '',
      image: 'https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628__340.jpg'
    },
    {
      name: 'Ramen',
      price: 8000,
      description: '',
      image: 'https://thumbs.dreamstime.com/b/ramen-soup-8950785.jpg'
    }
  ]

  product: any;

  constructor(private builder:FormBuilder){
    this.form = builder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:'',
      image:['',Validators.required]
    })
  }

  onAdd(){
    this.list.push(this.form.value);
    this.form.reset();
  }

  onSelectProudct(event:any){
    this.product = event;
  }

}
