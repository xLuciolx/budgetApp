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
    expForm: FormGroup;
    title: string = 'TL_ADD_EXPENSE';
    today: Date
    lastDay
    month
    min
    max

    constructor(
        private fb: FormBuilder,
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        this.today = new Date()
        // this.lastDay = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0)
        // console.log(this.lastDay);

        this.today.getMonth() < 10 ? this.month = '0' + (this.today.getMonth() + 1) : this.month = (this.today.getMonth() + 1)
        let maxDay = this.daysInMonth(this.today.getMonth(), this.today.getFullYear())
        console.log(maxDay);

        this.min = new Date(this.today.getFullYear() + '-' + this.month).toISOString();
        this.max = new Date(this.today.getFullYear() + '-' + this.today.getMonth() + '-' + maxDay).toISOString()
        this.createForm();
    }


    daysInMonth(month, year) {
        return new Date(year, month, 0).getDate()
    }

    createForm() {
        this.expForm = this.fb.group({
            name: ['', Validators.required],
            person: ['', Validators.required],
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
