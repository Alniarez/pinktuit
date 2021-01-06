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

@NgModule({
  declarations: [
    // Features
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostCreateComponent,
    PostViewComponent,
    // Controls
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
