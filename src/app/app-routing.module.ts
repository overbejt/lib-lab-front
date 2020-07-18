import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { RouteGuardService } from './service/route-guard.service';
  const routes: Routes = [
  { 
    path : "", component : LoginComponent 
  },
  { 
    path : "login", component : LoginComponent 
  },
  { 
    path : "signup", component : SignupComponent 
  },
  { 
    path : "logout", component : LogoutComponent,
    canActivate : [ RouteGuardService ] 
  },
  { 
    path : "list-book", component : BookListComponent, 
    canActivate : [ RouteGuardService ] 
  },
  { 
    path : "book/:id", component : BookComponent,
    canActivate : [ RouteGuardService ] 
  },
  { 
    path : "**", component : ErrorComponent 
  }
];  // End of the 'Routes' array

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
