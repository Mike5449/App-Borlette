import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SplashScreenService } from './shared-service/splash-screen.service';
import { SplashLogModule } from './layouts/splash-log/splash-log.module';
import { NgForm, FormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconsModule } from './icons/icons.module';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageBankModule } from './layouts/manage-bank/manage-bank.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './shared-service/token-interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Modal1Component } from './components/modals/modal1/modal1.component';
import { ModalsModule } from './components/modals/modals.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ManageUserComponent } from './layouts/manage-user/manage-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
// import { ModalModule } from './_modal';
//import { ModalsModule } from './components/modals/modals.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddUserComponent,
    ManageUserComponent,
    ListUserComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    ManageBankModule,
    SplashLogModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    FontAwesomeModule,
    //IconsModule
    //AngularFontAwesomeModule
    BootstrapIconsModule,
    NgbModule,
    HttpClientModule,
    //ModalsModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
