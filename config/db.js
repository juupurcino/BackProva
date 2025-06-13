const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bh8jz38scku3joqsaqdi-mysql.services.clever-cloud.com',
  user: 'uyufx6cac4ik62dg',
  password: 'uyufx6cac4ik62dg',
  database: 'bh8jz38scku3joqsaqdi',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;