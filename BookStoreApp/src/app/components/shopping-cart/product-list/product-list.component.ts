import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
//import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 isLinear = false;
  productList: Product[] = []
  wishlist: number[] = []
  changeText: boolean;
  constructor(
  //private dialog: MatDialog,
    private productService: ProductService,
    private wishlistService: WishlistService
  ) {
  this.changeText = false; }

  ngOnInit() {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      console.log(productIds)
      this.wishlist = productIds
    })
  }

   //openDialog():void {
  //  const dialogRef = this.dialog.open(CartComponent, {
   //   width: "auto",
   //   panelClass: "custom-dialog-container",
   // });
  //  dialogRef.afterClosed().subscribe((result) => {
    //  console.log("the dialog box is closed");
    //});
  //}

}