import { Month } from './../../models/Month';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { dbService } from './../../services/dbservice';
import { ExpenseModalPage } from '../expense-modal/expense-modal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'TL_APP';
  month: Month;
  id : string;
  date = new Date();
  totalExpenses: number;
  


  constructor(
    private dbService: dbService,
    public translate: TranslateService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
  }
  
  ionViewDidLoad() {
    this.id = this.date.getMonth().toString() + this.date.getFullYear().toString();
    this.dbService.getCurrentMonthInfos(this.id).then(
      result => {                
        this.month = result
        this.checkIncome();
        console.log(this.month);
      }
    )
  }

  checkIncome() {
    if(!this.month.income) {
      this.incomeAlert().then(
        () => {
          if(this.month.income) this.calculs()
          else this.checkIncome()
        },
        err => this.checkIncome()
      )
    }
    else this.calculs()
  }

  async calculs() {
    console.log(this.month);
    if(!this.month.expenses) {
      this.month.balance = this.month.income
    } else {
      this.totalExpenses = this.month.totalExpenses();
      this.month.balance = this.month.income - this.totalExpenses
    }
  }

  async incomeAlert(): Promise<any> {
    return  new Promise<any>((resolve, reject) => {
      this.dbService.getCurrentMonthInfos(this.id).then(
        month => {
          this.month = month
          let income =this.alertCtrl.create({
            title: this.translate.instant('TL_YOUR_INCOME'),
            inputs: [
              {
                name: 'income',
                type: 'number'
              }
            ],
            buttons: [
              {
                text: this.translate.instant('TL_CANCEL'),
                role: 'cancel',
                handler: () => resolve()
              },
              {
                text: this.translate.instant('TL_VALID'),
                role: 'save',
                handler: data => {
                  if(data.income) {
                    this.month.income = data.income
                    this.dbService.save(this.month).then(
                      result => {
                        this.month = result
                        resolve()
                      }, 
                      err => reject()
                    )
                  }
                }
              }
            ]
          })
          income.present()
        }
      )
    })
  }

  openModal() {
    let modal = this.modalCtrl.create(ExpenseModalPage);
    modal.onDidDismiss(data => {  
      if(!data) return false
      if(!this.month.expenses) this.month.expenses = []
      this.month.expenses.push(data)
      this.dbService.save(this.month).then(
        result => {
          this.month = result
          this.calculs()
        }    
      )
    })
    modal.present();
  }
}
