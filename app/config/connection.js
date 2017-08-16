var Sequelize = require('sequelize');

var sequelize = new Sequelize('burgers', 'root',
'Superman1103', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  }
});

// sequelize authentication
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
