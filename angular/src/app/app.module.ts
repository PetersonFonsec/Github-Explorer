import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { BarInfoComponent } from './components/bar-info/bar-info.component';
import { FormRepositoryComponent } from './components/form-repository/form-repository.component';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    BarInfoComponent,
    FormRepositoryComponent,
    ListRepositoriesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
