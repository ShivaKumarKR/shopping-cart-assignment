import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomePageResolver } from './resolvers/home-page.resolver';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').
      then(module => module.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./modules/register/register.module')
      .then(module => module.RegisterModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module')
      .then(module => module.HomeModule),
      resolve: {
        homePageDetails: HomePageResolver
      }
  },
  {
    path: 'product', loadChildren: () => import('./modules/product-list/product-list.module')
      .then(module => module.ProductListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
