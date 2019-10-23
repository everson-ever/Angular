import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/Endereco';

@Injectable({
	providedIn: 'root'
})
export class CepService {
	public enderecos: Endereco[] = [];

	constructor(private http: HttpClient) {}

	consultaCep(cep: string) {
		const url = `http://viacep.com.br/ws/${cep}/json/`;
		return this.http.get(url);
	}

	public armazenarPesquisa(endereco: Endereco) {
		this.enderecos.push(endereco);
	}

	public getHistorico() {
		return this.enderecos;
	}
}
