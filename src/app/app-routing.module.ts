import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'projects',
    component: ProjectsComponent
  },
  {
    path:'**',
    component:PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
