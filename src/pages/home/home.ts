import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { dbService } from './../../services/dbservice';
import { ExpenseModalPage } from '../expense-modal/expense-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Budget Manager';
  month: any;
  id : string;
  date = new Date();
  totalExpenses: number;
  


  constructor(
    private dbService: dbService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {
  }
  
  ionViewDidLoad() {
    this.id = this.date.getMonth().toString() + this.date.getFullYear().toString();
    this.dbService.getCurrentMonthInfos(this.id).then(
      result => {                
        if(!result.income) this.incomeAlert()
        if (!result.expenses) {
          result.balance = result.income
        } else {
          this.totalExpenses = result.totalExpenses()
          result.balance = result.income - this.totalExpenses;
        }
        this.month = result
        console.log(this.month);
        
      }
    )
  }

  async incomeAlert() {
    this.month = await this.dbService.getCurrentMonthInfos(this.id);
    let income = this.alertCtrl.create({
      title: 'Your income',
      inputs: [
        {
          name: 'income',
          placeholder: 'Income',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Save',
          role: 'save',
          handler: data => {
            if(data.income) {
              this.month.income = data.income
              this.dbService.save(this.month).then(
                result => {                  
                  this.month = result
                }
              );
            }                   
          }
        }
      ]

    })
    income.present();
  }

  openModal() {
    let modal = this.modalCtrl.create(ExpenseModalPage);
    modal.onDidDismiss(data => {  
      if(!this.month.expenses) {
        this.month.expenses = [];
        this.month.expenses.push(data)
      } else {
        this.month.expenses.push(data)
      }
      this.dbService.save(this.month).then(
        result => this.month = result
      )
    })
    modal.present();
  }

}
