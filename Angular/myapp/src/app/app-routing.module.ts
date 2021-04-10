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

import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [

  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminLoginComponent },
      { path: 'panel', component: AdminPanelComponent },
    ],
  },
  {
    path: '', component: UserComponent,
    children: [
      { path: '', pathMatch: 'full', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', component: HomeComponent },
      { path: 'user', component: UsersComponent },
      { path: 'books', component: BooksComponent },
      { path: 'books/:id', component: BookDetailsComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/:id', component: CategoryDetailsComponent },
      { path: 'categories/:id/:id', component: BookDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'authors/:id', component: AuthorDetailsComponent },
      { path: 'authors/:id/:id', component: BookDetailsComponent },
      { path: ':id', component: BookDetailsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
