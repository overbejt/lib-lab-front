import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookListComponent } from './book-list/book-list.component';
import { LogoutComponent } from './logout/logout.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    BookListComponent,
    LogoutComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Needed for ngModel
    HttpClientModule // Needed for http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
