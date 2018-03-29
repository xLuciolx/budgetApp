import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { HistoryPage } from './../history/history';
// import { AboutPage } from '../about/about';
// import { SharedModule } from '../../shared/shared.module';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HistoryPage;
  // tab3Root = AboutPage;

  constructor() {

  }
}
