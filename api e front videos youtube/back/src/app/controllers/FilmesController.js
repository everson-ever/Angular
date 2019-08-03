const { Filme } = require('../models');

class FilmesController {
	async index(req, res) {
		const filmes = await Filme.findAll();

		return res.send({ status: true, response: filmes, cod: 200 });
	}

	async show(req, res) {
		const id = req.params.id;
		const filme = await Filme.findOne({
			where: {
				id: id
			}
		});

		if (filme) {
			return res.json({ status: true, response: filme, cod: 200 });
		}
		return res.json({ status: false, msg: 'Not Found', cod: 404 });
	}

	async store(req, res) {
		const created = await Filme.create(req.body);

		if (created) {
			return res.json({ status: true, response: req.body, cod: 200 });
		}

		return res.json({ status: false, msg: 'Internal Server Error', cod: 500 });
	}

	update(req, res) {}

	destroy(req, res) {
		const id = req.params.id;

		const filme = Filme.findOne({
			where: {
				id: id
			}
		});

		if (!filme) {
			return res.json({ status: false, msg: 'Not Found', cod: 404 });
		}

		const deleted = Filme.destroy({
			where: {
				id: id
			}
		});

		if (deleted) {
			return res.json({ status: true, cod: 200 });
		}
		return res.json({ status: false, msg: 'Internal Server Error', cod: 500 });
	}
}

module.exports = new FilmesController();
