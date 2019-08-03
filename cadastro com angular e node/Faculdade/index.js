var express = require('express');
var cors = require('cors');
var app = express();

var bd = require('./bd');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
	bd.connect((erro) => {
		if (!erro) {
			console.log('http://localhost:3000');
		} else {
			console.log('Erro: ', erro.sqlMessage);
		}
	});
});

app.get('/alunos', (req, res) => {
	var sql = `SELECT al.matricula, al.nome as Aluno, cur.nome AS Curso, al.periodo FROM tb_cursos AS cur
			   INNER JOIN tb_alunos AS al
			   ON al.curso = cur.id
			   WHERE al.periodo = 3`;

	bd.query(sql, (erro, resultado) => {
		if (!erro) {
			return res.json(resultado);
		} else {
			return res.json(erro);
		}
	});
});

app.post('/alunos', (req, res) => {
	const { matricula, nome, periodo, curso } = req.body;
	console.log(matricula);

	const sql = `INSERT INTO tb_alunos(matricula, nome, periodo, curso_id)
				VALUES(?, ?, ?, ?)`;

	bd.query(sql, [ matricula, nome, periodo, curso ], (erro, resultado) => {
		if (!erro) {
			return res.json({ status: true, response: resultado });
		} else {
			return res.json({ status: false, response: erro });
		}
	});
});

app.get('/alunos/:matricula', (req, res) => {
	const matricula = req.params.matricula;
	const sql = 'SELECT * FROM tb_alunos  WHERE matricula = ?';

	bd.query(sql, matricula, function(erro, resultado) {
		if (resultado.length > 0) {
			res.send({ status: true, response: resultado });
		} else {
			return res.send({ status: false, response: erro });
		}
	});
});

app.get('/cursos', (req, res) => {
	const sql = `SELECT * FROM tb_cursos`;

	bd.query(sql, (erro, resultado) => {
		if (!erro) {
			return res.send({ status: true, response: resultado });
		} else {
			return res.send({ status: false, response: erro });
		}
	});
});
