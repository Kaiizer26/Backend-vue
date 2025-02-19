const { Sequelize } = require('sequelize')
const sequelizeClient = new Sequelize(
    'postgres',
    'postgres',
    'landy',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
)

module.exports = sequelizeClient