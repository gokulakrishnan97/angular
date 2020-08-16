import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ArchiveHomeComponent}, 
  { path:'archive/:year/:day', component: ArchiveDetailComponent},
  // { path: 'followers', component: GitprofileInfoComponent },
  // { path: 'posts', component: ApiComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
