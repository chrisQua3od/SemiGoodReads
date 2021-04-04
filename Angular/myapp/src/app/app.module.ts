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

// const routes:Routes = [
//   {path:'',component:HomeComponent},
//   {path:'books',component:BooksComponent},
//   {path:'categories',component:CategoriesComponent},
//   {path:'author',component:AuthorsComponent},
// ]

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    AuthorService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
