import { NgModule } from '@angular/core';
import { RepositoryComponent } from './repository.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RepositoryComponent }
]

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
