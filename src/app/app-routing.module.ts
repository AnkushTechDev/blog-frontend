import { PostsDetailsComponent } from './posts/posts-details/posts-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    { path: "", component: DashboardComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] }, // Protect this route
    { path: "posts", component: PostsComponent, canActivate: [AuthGuard] }, // Protect this route
    { path: "posts/:id/details", component: PostsDetailsComponent, canActivate: [AuthGuard] }, // Protect this route
    { path: "users", component: UsersComponent },
    { path: "users/:id/details", component: UserDetailsComponent },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }, // Protect this route
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }
