import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashLogComponent } from './splash-log.component';
import { LoginComponent } from '../../components/login/login.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { SplashScreenComponent } from '../../shared/components/splash-screen/splash-screen.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    SplashLogComponent,
    LoginComponent,
    SplashScreenComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule

  ]
})
export class SplashLogModule { }
