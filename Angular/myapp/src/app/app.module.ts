import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
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
import { UsersService } from './services/users.service';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

// const routes:Routes = [
//   {path:'',component:HomeComponent},
//   {path:'books',component:BooksComponent},
//   {path:'categories',component:CategoriesComponent},
//   {path:'author',component:AuthorsComponent},
// ]

import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryPanelComponent } from './components/admin/category-panel/category-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './components/admin/category-panel/add-category/add-categroy.component';
import { EditItemComponent } from './components/admin/category-panel/edit-category/edit-category.component';
import { BooksPanelComponent } from './components/admin/books-panel/books-panel.component';
import { AddBookComponent } from './components/admin/books-panel/add-book/add-book.component';
import { EditBookComponent } from './components/admin/books-panel/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    CategoriesComponent,
    LoginComponent,
    AuthorComponent,
    CategoryComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbModule,

    // RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthorService,
    UsersService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
