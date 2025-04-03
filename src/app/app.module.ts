import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { PostService } from './services/posts.service';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BoxCardComponent } from './box-card/box-card.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    BoxCardComponent,
    UserDetailsComponent,
    PostsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PostService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
