import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsCepComponent } from './forms-cep/forms-cep.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoricoPesquisaComponent } from './historico-pesquisa/historico-pesquisa.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [ AppComponent, FormsCepComponent, HistoricoPesquisaComponent, MenuComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
