import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './error-handler.service';

import { CoreModule } from './core';
import { ErrorModule } from './error';
import { HomeModule } from './home';
import { LoginModule } from './login';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ErrorModule,
    HomeModule,
    LoginModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: AppErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
