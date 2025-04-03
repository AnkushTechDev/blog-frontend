import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


const appRoutes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "posts", component: PostsComponent },
    { path: "posts/:id/details", component: PostsDetailsComponent },
    { path: "users", component: UsersComponent },
    { path: "users/:id/details", component: UserDetailsComponent },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
