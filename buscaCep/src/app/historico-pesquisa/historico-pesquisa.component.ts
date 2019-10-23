import { Component, OnInit } from '@angular/core';
import { CepService } from '../services/cep.service';
import { Endereco } from '../models/Endereco';

@Component({
	selector: 'app-historico-pesquisa',
	templateUrl: './historico-pesquisa.component.html',
	styleUrls: [ './historico-pesquisa.component.css' ]
})
export class HistoricoPesquisaComponent implements OnInit {
	public enderecos: Endereco[] = [];

	constructor(private cepService: CepService) {
		this.getHistorico();
	}

	ngOnInit() {}

	public getHistorico() {
		this.enderecos = this.cepService.getHistorico();
	}
}
