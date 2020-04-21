import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'

const routes: Routes = [
  { path: "login", component: LoginComponent },

  { path: '', component: LoginComponent },

  { path: "register", component: RegisterComponent },

  {
    path: "shopping", component: ShoppingCartComponent,
    children: [
      {
        path: '', redirectTo: '', pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
