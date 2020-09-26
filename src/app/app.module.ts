import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
