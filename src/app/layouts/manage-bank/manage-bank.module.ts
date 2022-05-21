import { ListBankComponent } from './../../components/list-bank/list-bank.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBankComponent } from '../../components/add-bank/add-bank.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconsModule } from 'src/app/icons/icons.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageBankComponent } from './manage-bank.component';
//import { ModalsModule } from 'src/app/components/modals/modals.module';



@NgModule({
  declarations:[
  ManageBankComponent,
    AddBankComponent,
    ListBankComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    IconsModule,
    //ModalsModule

  ]
})
export class ManageBankModule { }
