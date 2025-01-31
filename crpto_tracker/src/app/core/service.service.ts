import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  http = inject(HttpClient);


  fetchTrendingCoinsList(): Observable<any> {
    return this.http.get<any>("https://crypto-tracker-backend-five.vercel.app/get/trending_coins");
  }

  fetchCurrencies(): Observable<any> {
    return this.http.get<any>("https://crypto-tracker-backend-five.vercel.app/currenies");
  }


  fetchCyrptoCoins(): Observable<any> {
    return this.http.get<any>("https://crypto-tracker-backend-five.vercel.app/crypto_coins");
  }

  getConvertedAmount(): Observable<any> {
    return this.http.get<any>("https://crypto-tracker-backend-five.vercel.app/get/amount");
  }
}
