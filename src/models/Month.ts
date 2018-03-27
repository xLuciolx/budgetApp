import { Expense } from './Expense';

export class Month {
    _id: string
    _rev: string
    income: number
    expenses: Array<Expense>
    balance: number

    constructor (db_month) {
        Object.assign(this, db_month)
    }

    totalExpenses() {
        let total = 0
        for (let i = 0; i < this.expenses.length; i++) {
            total  += parseFloat(this.expenses[i].amount);
        }

        return total
    }
}