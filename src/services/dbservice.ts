import { Month } from './../models/Month';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

@Injectable()

export class dbService {
    private db = new PouchDB('budget', { 'auto_compaction': true });

    async save(month) {
        await this.db.put(month);
        return await new Month(month)
    }

    async getCurrentMonthInfos(id) {
        try {
            let result = await this.db.get(id);
            return new Month(result);
        } catch (err) {
            await this.db.put({
                '_id': id
            })
            return await new Month(this.db.get(id));

        }
    }

    async getHistory() {
        try {
            let history = await this.db.allDocs({
                include_docs: true,
            })
            return history

        } catch (err) {
            console.log(err);
        }
    }
}