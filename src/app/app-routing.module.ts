import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeedComponent } from './features/feed/feed.component';
import { PostViewComponent } from './features/post/post-view/post-view.component';
import { UserLoginComponent } from './features/user/user-login/user-login.component';
import { UserSigninComponent } from './features/user/user-signin/user-signin.component';

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signin', component: UserSigninComponent },
// { path: 'post/:id', component: PostViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
