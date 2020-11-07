import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRepositoryComponent } from './components/form-repository/form-repository.component';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './components/header/header.module';
import { BarInfoModule } from './components/bar-info/bar-info.module';

@NgModule({
  declarations: [
    AppComponent,
    FormRepositoryComponent,
    ListRepositoriesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HeaderModule,
    BarInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
