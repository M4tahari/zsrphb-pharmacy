import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/Product';
import { OffersServiceService } from '../../../shared/services/offers-service.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit, OnChanges {

  @Input() productInput?: Product;
  loadedImage?: string;
  
  constructor(private offersService: OffersServiceService) {

  }

  ngOnChanges(): void {
    if(this.productInput?.id) {
      this.offersService.loadProductImage(this.productInput.image_url).subscribe((data) => {
        this.loadedImage = data;
      });
    }
  }
  
  ngOnInit(): void {
    
  }

}
