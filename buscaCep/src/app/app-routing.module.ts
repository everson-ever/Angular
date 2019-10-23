import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsCepComponent } from './forms-cep/forms-cep.component';
import { HistoricoPesquisaComponent } from './historico-pesquisa/historico-pesquisa.component';

const routes: Routes = [
	{ path: '', component: FormsCepComponent },
	{ path: 'historico-cep', component: HistoricoPesquisaComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
