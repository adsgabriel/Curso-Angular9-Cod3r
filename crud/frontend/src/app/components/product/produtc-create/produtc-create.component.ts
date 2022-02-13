import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-produtc-create',
  templateUrl: './produtc-create.component.html',
  styleUrls: ['./produtc-create.component.css']
})
export class ProdutcCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }
  
  constructor(private productService: ProductService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void{
  this.productService.create(this.product).subscribe(() =>{
    this.productService.showMessage('Produto criado')
    this.router.navigate(['/products'])

  })

  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
