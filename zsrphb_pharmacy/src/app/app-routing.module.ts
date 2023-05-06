import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { 
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
  },

  { 
    path: 'gyik', 
    loadChildren: () => import('./pages/gyik/gyik.module').then(m => m.GyikModule) 
  },

  { 
    path: 'main', 
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  },

  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },

  { 
    path: 'offers', 
    loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersModule),
    canActivate: [AuthGuard] 
  },

  { 
    path: 'products', 
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) 
  },

  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },

  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) 
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
