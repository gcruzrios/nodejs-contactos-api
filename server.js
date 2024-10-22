const express = require('express')
const app = express()

const archivoDb = require('./conexion');
const port = 8000

require('dotenv').config();

const cors = require('cors');
app.use(cors({origin: `*`}));
app.options('http://localhost:3000', cors());

//Importacion rutas y modelos
app.use(express.json());
const rutausuario = require('./routes/usuario')
const rutacontacto = require('./routes/contacto')


app.use('/api/usuario', rutausuario)
app.use('/api/contacto', rutacontacto)


app.get('/', (req, res) => {
  res.send('Hola Mundo, aquí servidor NodeJS Contactos Api !')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en puerto ${process.env.PORT}`)
})