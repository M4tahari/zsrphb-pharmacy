import { Component, OnInit } from '@angular/core';
import { OffersServiceService } from '../../shared/services/offers-service.service';
import { Product } from '../../shared/models/Product';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  offersObject?: Array<Product>;
  chosenProduct?: Product;

  constructor(private offersService: OffersServiceService) {}

  ngOnInit(): void {
      this.offersService.loadProductMetaData('product-constants.json').subscribe((data: Array<Product>) => {
        console.log(data);
        this.offersObject = data;
      });
  }

  loadProduct(productObject: Product) {
    this.chosenProduct = productObject;
  }
}
