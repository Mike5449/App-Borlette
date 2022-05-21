import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../components/home/home.component';
import { PostsComponent } from '../../components/posts/posts.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { IconsModule } from '../../icons/icons.module';
//import { ModalsModule } from '../../components/modals/modals.module';



@NgModule({

  declarations: [
    DefaultComponent,
    HomeComponent,
    PostsComponent,

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
    //AngularFontAwesomeModule
    //AngularFontAwesomeModule
  ]
})
export class DefaultModule { }
