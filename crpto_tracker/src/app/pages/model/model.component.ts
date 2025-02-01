import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CurrencyService } from '../../core/service.service';
import { UpperCasePipe } from '@angular/common';
import { enteredValue } from '../../core/interface';

@Component({
  selector: 'app-model',
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})

export class ModelComponent implements OnInit {

  userForm: FormGroup;

  _currencyService = inject(CurrencyService);

  cryptoCoins: any[] = [];
  cryptoCurrencies: any[] = [];

  resultedAmount : number = 0;
  isResultAmount : boolean = false;



  constructor() {
    this.userForm = new FormGroup({
      coin_id: new FormControl("",[Validators.required]),
      currency: new FormControl("", [Validators.required]),
      inputAmount: new FormControl("", [Validators.required])
    })
  }

  enteredValue : any = {
    "coin_id" : "",
    "currency" : "",
    "inputAmount" : 0
  }

  ngOnInit() {
    this.fetchCryptoCoins();
    this.fetchCryptoCurrencies();
  }

  fetchCryptoCoins() {
    this._currencyService.fetchCyrptoCoins().subscribe(
      (res: any) => {
        if (res) {
          this.cryptoCoins = res;
          // console.log("Updated trendingCoinsList:", this.cryptoCoins); 
        } else {
          console.log("API response does not contain data.");
        }
      },
      (error) => {
        alert(error.message)
      }
    );
  }

  fetchCryptoCurrencies() {
    this._currencyService.fetchCurrencies().subscribe((res: any) => {
      if (res) {
        this.cryptoCurrencies = res;
      } else {
      }
    },
      (error) => {
        alert(error.message)
      }

    )
  }


  getCryptoAmount(values: {}) {

    this._currencyService.getConvertedAmount(values).subscribe((res: any) => {
      if (res) {
        this.isResultAmount = true;
        this.resultedAmount = res.total_amount;
      } else {
        console.log("API response does not contain data.");
      }
    },
      (error) => {
        alert(error.message)
      }
    )
  }

  resetForm() {
    this.userForm.reset();  
    this.isResultAmount = false;  
    this.resultedAmount = 0;  
  }
  
  onViewAmount() {
    this.enteredValue = {
      "coin_id" : this.userForm.value.coin_id,
      "currency" : this.userForm.value.currency,
      "inputAmount" : this.userForm.value.inputAmount
    }
    const result = this.getCryptoAmount(this.userForm.value)
  }
}
