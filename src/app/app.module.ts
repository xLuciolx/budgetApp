import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


/**Pages */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from './../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ExpenseModalPage } from './../pages/expense-modal/expense-modal';

/**Service */
import { dbService } from './../services/dbservice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    HomePage,
    HistoryPage,
    AboutPage,
    ExpenseModalPage,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    HistoryPage,
    AboutPage,
    ExpenseModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    dbService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
