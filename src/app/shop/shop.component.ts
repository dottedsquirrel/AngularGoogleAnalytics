import { Component, OnInit } from '@angular/core';
import{GoogleAnalyticsService} from '../services/google-analytics.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }

  SendAddToCartEvent(){
    this.googleAnalyticsService.eventEmitter("add_to_cart", "shop", "cart", "click", 1);
  }

}
