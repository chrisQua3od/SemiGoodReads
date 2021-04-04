import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './services/users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './components/user-details/user-details.component';

//Class Decorator


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    UserDetailsComponent
   
    /**
     * Main building blocks in angular:
     * 1- Components 
     * 2- Directives
     * 3- Pipes
     */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
    /**
     * Other modules (built-in) || custom module
     */
  ],
  providers: [
    UsersService
    /**
  4- Services 
*/],
  bootstrap: [AppComponent /**root component*/]
})
export class AppModule {
  
  
}
