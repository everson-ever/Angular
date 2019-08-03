'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('filmes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			year: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING
			},
			url: {
				allowNull: false,
				type: Sequelize.STRING
			},
			visible: {
				allowNull: false,
				defaultValue: true,
				type: Sequelize.BOOLEAN
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('filmes');
	}
};
