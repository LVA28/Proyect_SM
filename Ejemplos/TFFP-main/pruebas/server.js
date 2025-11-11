const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sa',
  password: 'Contraseña1!',
  database: 'PRUEBA'
});

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para realizar la consulta
app.get('/api/prueba', (req, res) => {
  connection.query('SELECT * FROM PRUEBA1', (error, results) => {
    if (error) {
      console.error('Error en la consulta:', error);
      res.status(500).send('Error en la consulta a la base de datos');
      return;
    }
    res.json(results);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});