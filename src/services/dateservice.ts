import { Injectable } from "@angular/core";

@Injectable()

export class dateService {
    private months: Array<string> = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    getMonthName(): string {
        let d = new Date();        
        return this.months[d.getMonth()];
    }

    getMonthUp(month): string {
        let index = this.months.indexOf(month);
        if(index >= 11) {
            index = 0;
            return this.months[index];
        }
        return this.months[index+1];
        
    }

    getMonthDown(month): string {
        let index = this.months.indexOf(month);
        if (index <= 0) {
            index = 11;
            return this.months[index];
        }
        return this.months[index-1];
    }
}