import { Component, OnInit } from '@angular/core';
import { ProductObjects } from '../../shared/constants/product-constants-default';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = ['beres_csepp', 'beres_porcero_filmtabletta', 'bioco_mega_c_vitamin', 
  'c_vitamin', 'catalase_oszules_elleni_kapszula', 'corsodyl_szajviz',  
  'herbafulvo_esszencia_papaya', 'herbal_swiss_hot_drink','immunotrofina_szirup', 
  'protexin_balance_kapszula',  'salvus_gyogyviz', 'supradyn_filmtabletta'];

  productObjects: any = ProductObjects;

  constructor () {}

  ngOnInit(): void {

  }
}
