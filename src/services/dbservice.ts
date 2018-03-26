import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()

export class dbService {
    private db = new PouchDB('budget', {'auto_compaction': true});

    // initDb() {
    //     this.db  = new PouchDB('budget', {'auto_compaction': true});
    //     this.db.info().then(
    //         info => {
    //             console.log(info);
                
    //         }
    //     )
    // }

    // async save(income) {
    //     await this.db.post({
    //         income: income
    //     })
    // }

    async getCurrentMonthInfos(id) {
    //     this.db.get(month).then(
    //         result => {
    //             console.log(result);
                
    //         }
    //     ).catch(
    //         result => {
    //             this.db.put({
    //                 '_id' : month
    //             })
    //             return result;
    //         }
            
    //     )
        try {
            let result = await this.db.get(id);
            console.log(result);
            
            return result;
        } catch (err) {
            // console.log(error);
            this.db.put({
                    '_id' : id
                })
            
        }
    }
}