module.exports = (sequelize, DataTypes) => {
	const Filme = sequelize.define('Filme', {
		name: DataTypes.STRING,
		year: DataTypes.INTEGER,
		image: DataTypes.STRING,
		url: DataTypes.STRING,
		visible: DataTypes.BOOLEAN
	});

	return Filme;
};
