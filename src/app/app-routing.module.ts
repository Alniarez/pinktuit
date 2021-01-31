import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './features/feed/feed.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'login', component: UserLoginComponent },
  // { path: '/:userName', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
