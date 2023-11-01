import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpclient: HttpClient ){

  }

  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    this.httpclient.get("https://api.escuelajs.co/api/v1/products").subscribe(resp => {
    console.log(resp);
  });
  }
}
