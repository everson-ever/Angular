import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CepService } from '../services/cep.service';
import { Endereco } from '../models/Endereco';

@Component({
	selector: 'app-forms-cep',
	templateUrl: './forms-cep.component.html',
	styleUrls: [ './forms-cep.component.css' ]
})
export class FormsCepComponent implements OnInit {
	public cep: string;
	public endereco: Endereco;
	public formulario: FormGroup;

	constructor(private fb: FormBuilder, private cepService: CepService) {
		this.endereco = new Endereco();
	}

	ngOnInit() {
		this.formulario = this.fb.group({
			cep: [ null, [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ] ],
			logradouro: [ { value: null, disabled: true } ],
			bairro: [ { value: null, disabled: true } ],
			cidade: [ { value: null, disabled: true } ],
			uf: [ { value: null, disabled: true } ]
		});

		this.formulario.controls.cep.valueChanges.subscribe((cep) => {
			if (cep.length === 8) {
				this.buscar();
			}
		});
	}

	public buscar() {
		const cep = this.formulario.controls.cep.value;
		this.cepService.consultaCep(cep).subscribe((dados) => {
			this.formulario.controls.cidade.setValue(dados['localidade'] || 'Não disponível');
			this.formulario.controls.bairro.setValue(dados['bairro'] || 'Não disponível');
			this.formulario.controls.logradouro.setValue(dados['logradouro'] || 'Não disponível');
			this.formulario.controls.uf.setValue(dados['uf'] || 'Não disponível');

			this.endereco.cep = cep;
			this.endereco.cidade = dados['localidade'];
			this.endereco.bairro = dados['bairro'];
			this.endereco.logradouro = dados['logradouro'];
			this.endereco.uf = dados['uf'];

			this.cepService.armazenarPesquisa(this.endereco);
		});
	}
}
