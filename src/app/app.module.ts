import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './controls/button/button.component';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './features/post/post-create/post-create.component';
import { PostViewComponent } from './features/post/post-view/post-view.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserLoginComponent } from './features/user/user-login/user-login.component';
import { FeedComponent } from './features/feed/feed.component';
import { UserSigninComponent } from './features/user/user-signin/user-signin.component';
import { AuthenticationInterceptor } from './features/user/authentication.interceptor';
import { UserImage } from './features/user/user-image/user-image.component';
import { MessageBox } from './features/message/message-box/message-box.component';

@NgModule({
  declarations: [
    // Features
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FeedComponent,
    // Post
    PostCreateComponent,
    PostViewComponent,
    // User
    UserLoginComponent,
    UserSigninComponent,
    UserImage,
    // Controls
    ButtonComponent,
    // Messages
    MessageBox
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
