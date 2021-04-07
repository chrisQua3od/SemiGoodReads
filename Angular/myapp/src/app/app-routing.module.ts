import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { RegisterComponent } from './components/register/register.component';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'user', component: UsersComponent },
      { path: 'books', component: BooksComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'authors', pathMatch: 'full' },
      { path: 'authors', component: AuthorsComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminLoginComponent },
      { path: 'panel', component: AdminPanelComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
