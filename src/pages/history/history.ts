import { dbService } from './../../services/dbservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  title: string = 'TL_HISTORY';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: dbService
  ) {
    this.dbService.getHistory().then(
      res => console.log(res)

    );
  }

}
