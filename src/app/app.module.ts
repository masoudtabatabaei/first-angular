import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { TodoStorageService } from './todo-storage.service';
import { BindComponent } from './bind/bind.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DateComponent } from './date/date.component';
import { TempConvertorPipe } from './tempConvertorPipe';

@NgModule({
  declarations: [
    AppComponent ,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    TodoComponent,
    BindComponent,
    CustomerListComponent,
    DateComponent,
    TempConvertorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
