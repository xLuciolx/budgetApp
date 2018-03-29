import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Expense } from './../../models/Expense';

/**
 * Generated class for the ExpenseModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-expense-modal',
  templateUrl: 'expense-modal.html',
})
export class ExpenseModalPage {

  date = new Date();
  expForm : FormGroup;
  title: string = 'TL_ADD_EXPENSE';

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.createForm();
  }
  
  ionViewDidLoad() {
    
  }

  createForm() {
    this.expForm = this.fb.group({
      name: ['', Validators.required],
      person: ['',Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  addExpense(data) {
    let expanse = new Expense(data);
    this.viewCtrl.dismiss(expanse);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
