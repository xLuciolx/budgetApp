import { dateService } from './../../services/dateservice';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { dbService } from './../../services/dbservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: string = 'Budget Manager';
  month: string;
  income;
  info;
  id : string
  date = new Date();
  


  constructor(
    public navCtrl: NavController,
    private dbService: dbService,
    private dateService: dateService,
    public alertCtrl: AlertController
  ) {
    
  }

  ionViewDidLoad() {
    this.id = this.date.getMonth().toString() + this.date.getFullYear().toString();
    if(!this.income) {
      this.incomeAlert();
    }
    // console.log(this.id);
    
    // this.dbService.initDb();
    // if(!this.income){
    //   this.incomeAlert();
    // }
    // this.month = this.dateService.getMonthName();
    this.info = this.dbService.getCurrentMonthInfos(this.id)
    console.log(this.info);
    
  }

  monthUp(month) {
    this.month = this.dateService.getMonthUp(month);
  }

  monthDown(month) {
    this.month = this.dateService.getMonthDown(month);
  }

  incomeAlert() {
    let income = this.alertCtrl.create({
      title: 'Your income',
      inputs: [
        {
          name: 'income',
          placeholder: 'Income'
        }
      ],
      buttons: [
        {
          text: 'Save',
          role: 'save',
          handler: data => {
            this.income = data.income
            // this.dbService.save(this.income, this.id);
            console.log(this.income);
            
            
          }
        }
      ]

    })
    income.present();
    
  }

}
