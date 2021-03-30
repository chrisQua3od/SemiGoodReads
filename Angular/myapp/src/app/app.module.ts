import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './components/books/books.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { CategoriesComponent } from './components/categories/categories.component'
import { RouterModule , Routes } from '@angular/router';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
