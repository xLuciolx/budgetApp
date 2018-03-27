export class Expense {
    name: string
    person: string
    amount: number
    date: string

    constructor(db_expense) {
        Object.assign(this, db_expense)
    }
}