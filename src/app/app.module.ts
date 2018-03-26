import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/**Pages */
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from './../pages/history/history';
import { AboutPage } from '../pages/about/about';

/**Service */
import { dbService } from './../services/dbservice';
import { dateService } from './../services/dateservice';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    HomePage,
    HistoryPage,
    AboutPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    HistoryPage,
    AboutPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    dbService,
    dateService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
