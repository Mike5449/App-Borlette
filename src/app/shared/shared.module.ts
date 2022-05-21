import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SplashScreenService } from '../shared-service/splash-screen.service';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    BootstrapIconsModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [SplashScreenService],
})
export class SharedModule { }
