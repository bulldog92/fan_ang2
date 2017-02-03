import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule {}
