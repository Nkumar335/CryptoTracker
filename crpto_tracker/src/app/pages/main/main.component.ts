import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CurrencyService } from '../../core/service.service';
import {EmtptyStateComponent} from '../../shared/emtpty-state/emtpty-state.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [CommonModule, EmtptyStateComponent],
  styleUrls: ['./main.component.css'], 
})
export class MainComponent implements OnInit {

  trendingCoinsList: any[] = [];

  isLoaded : boolean = false;

  _currencyService = inject(CurrencyService);

  isData : boolean = false
 

  ngOnInit() {
    this.fetchTrendingCoins();
  }


  fetchTrendingCoins() {
    this._currencyService.fetchTrendingCoinsList().subscribe(
      (res: any) => {
        if (res) {
          this.trendingCoinsList = res;
          this.isData = true
        } else {
          console.log("API response does not contain data.");
        }
      },
      (error) => {
        alert(error.message)
      }
    );
  }
}

