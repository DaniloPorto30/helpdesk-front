import { TecnicosComponent } from './modules/admin/pages/tecnicos/tecnicos.component';
import { ClientesComponent } from './modules/admin/pages/clientes/clientes.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './modules/admin/components/header/header.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { ChamadosComponent } from './modules/admin/pages/chamados/chamados.component';
import { GraficosComponent } from './modules/admin/pages/graficos/graficos.component';
import { SettingsComponent } from './modules/admin/pages/settings/settings.component';
import { SubscriptionComponent } from './modules/admin/pages/subscription/subscription.component';
import { SignupComponent } from './core/components/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'side',
    component: SidebarComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'chamados',
    component: ChamadosComponent,
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
  },
  {
    path: 'graficos',
    component: GraficosComponent,
  },
  {
    path: 'tecnicos',
    component: TecnicosComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
