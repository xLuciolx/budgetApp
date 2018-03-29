import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseModalPage } from './expense-modal';

@NgModule({
  declarations: [
    ExpenseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseModalPage),
    SharedModule,
  ],
})
export class ExpenseModalPageModule {}
