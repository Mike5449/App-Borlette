import { FormsModule } from '@angular/forms';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SplashScreenComponent } from './shared/components/splash-screen/splash-screen.component';
import { SplashLogComponent } from './layouts/splash-log/splash-log.component';
import { Icons } from 'ng-bootstrap-icons/bootstrap-icons/icons.provider';
import { ManageBankComponent } from './layouts/manage-bank/manage-bank.component';
import { ListBankComponent } from './components/list-bank/list-bank.component';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { TokenInterceptorService } from './shared-service/token-interceptor.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import { RoleGuard } from './shared-service/authenticate/role.guard';
import { AuthGuard } from './shared-service/authenticate/auth.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AuthentificationGuardGuard } from './shared-service/authentification-guard.guard';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      // {
      //   path:'splash',
      //   component:SplashScreenComponent,
      // }
    ]


  },

  {
    path:'',
    component:DefaultComponent,
    // path:'dc',loadChildren:()=>import('./layouts/default/default.component').then(a=>a.DefaultComponent),canActivate:[AuthGuard]
    children:[
      {
       path:'home',
       component:HomeComponent,

      },
      {
       path:'posts',
       component:PostsComponent

      },
      {
        path:'adduser',
        component:AddUserComponent

       },

    ]
    ,canActivate:[AuthentificationGuardGuard,RoleGuard]

  },
  {
    path:'',
    component:ManageBankComponent,
    children:[
      {
        path:'listbank',
        component:ListBankComponent
      },
      {
        path:'addbank',
        component:AddBankComponent
      }

    ]
    ,canActivate:[RoleGuard]


  }
  // {path:'form',component:FormulaireComponent},
  //  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(routes),FormsModule,],
  exports: [RouterModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  }],
})
export class AppRoutingModule { }
