import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/admin/components/header/header.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';
import { ClientesComponent } from './modules/admin/pages/clientes/clientes.component';
import { ChamadosComponent } from './modules/admin/pages/chamados/chamados.component';
import { TecnicosComponent } from './modules/admin/pages/tecnicos/tecnicos.component';
import { FooterComponent } from './modules/admin/components/footer/footer.component';
import { LoginComponent } from './core/components/login/login.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { NgbModal, NgbModalConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { GraficosComponent } from './modules/admin/pages/graficos/graficos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './modules/admin/pages/settings/settings.component';
import { SubscriptionComponent } from './modules/admin/pages/subscription/subscription.component';
import { SignupComponent } from './core/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientesComponent,
    ChamadosComponent,
    TecnicosComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    SidebarComponent,
    GraficosComponent,
    SettingsComponent,
    SubscriptionComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CommonModule,
    NgChartsModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass:'toast-top-right',
      preventDuplicates: true
    }),


  ],
  providers: [NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
