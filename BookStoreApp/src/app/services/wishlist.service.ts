import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(environment.wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToWishlist(productId) {
    return this.http.post(environment.wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId) {
    return this.http.delete(environment.wishlistUrl + '/' + productId);
  }
}