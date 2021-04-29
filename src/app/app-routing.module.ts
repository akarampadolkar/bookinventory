import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdashboardComponent } from './bookdashboard/bookdashboard.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  { path: '', component: BookdashboardComponent },
  { path: 'booklist', component: BooklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
