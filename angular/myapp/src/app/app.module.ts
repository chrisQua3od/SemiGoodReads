import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { InterceptorService } from './services/interceptor.service';
import { AuthorComponent } from './components/author/author.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthorService } from './services/authors.service';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './components/register/register.component';
import { HomeService } from './services/home.service';
import { RatingModule } from 'ng-starrating';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { CommonModule } from '@angular/common';  
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryPanelComponent } from './components/admin/category-panel/category-panel.component';
import { AddItemComponent } from './components/admin/category-panel/add-category/add-categroy.component';
import { EditItemComponent } from './components/admin/category-panel/edit-category/edit-category.component';
import { BooksPanelComponent } from './components/admin/books-panel/books-panel.component';
import { AddBookComponent } from './components/admin/books-panel/add-book/add-book.component';
import { EditBookComponent } from './components/admin/books-panel/edit-book/edit-book.component';
import { AuthorPanelComponent } from './components/admin/author-panel/author-panel.component';
import { AddAuthorComponent } from './components/admin/author-panel/add-author/add-author.component';
import { EditAuthorComponent } from './components/admin/author-panel/edit-author/edit-author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    BookComponent,
    BookDetailsComponent,
    AuthorsComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    LoginComponent,
    AuthorComponent,
    CategoryComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminHeaderComponent,
    AdminPanelComponent,
    AdminComponent,
    CategoryPanelComponent,
    AddItemComponent,
    EditItemComponent,
    BooksPanelComponent,
    AddBookComponent,
    EditBookComponent,
    AuthorPanelComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    RatingModule,

    // RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthorService,
    UsersService,
    HomeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
