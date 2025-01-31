import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CurrencyService } from '../../core/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule],
  styleUrls: ['./main.component.css'], 
})
export class MainComponent implements OnInit {

  trendingCoinsList: any[] = [];

  _currencyService = inject(CurrencyService);

  isData : boolean = false
 

  ngOnInit() {
    this.fetchTrendingCoins();
  }

  fetchTrendingCoins() {
    this._currencyService.fetchTrendingCoinsList().subscribe(
      (res: any) => {
        console.log("API Response:", res); 
        if (res) {
          this.trendingCoinsList = res;
          console.log("Updated trendingCoinsList:", this.trendingCoinsList); 
          this.isData = true
        } else {
          console.log("API response does not contain data.");
        }
      },
      (error) => {
        console.error("API Error:", error); 
      }
    );
  }
}

