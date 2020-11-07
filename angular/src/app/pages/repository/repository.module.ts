import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RepositoryRoutingModule} from './repository-routing.module'
import { RepositoryComponent } from './repository.component';
import { RepositoryInfoComponent } from 'src/app/components/repository-info/repository-info.component';
import { ListIssuesComponent } from 'src/app/components/lists/list-issues/list-issues.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RouterModule } from '@angular/router';
import { BarInfoModule } from 'src/app/components/bar-info/bar-info.module';

@NgModule({
  declarations: [RepositoryComponent, RepositoryInfoComponent, ListIssuesComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    HeaderModule,
    RouterModule,
    BarInfoModule
  ]
})
export class RepositoryModule { }
