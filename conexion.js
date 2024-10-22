const mongoose = require('mongoose');

main().catch(err => console.log(err));

URI=process.env.DB_CNN;

async function main() {
  
  await mongoose.connect('mongodb+srv://gcruzrios:Grvn240675@cluster0.c5fgm.mongodb.net/NodeDbContactos');
  //await mongoose.connect('mongodb://127.0.0.1:27017/NodejsDb');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const objetodb = mongoose.connection

objetodb.on('connected',() => {console.log('Conexión correcta a DB')})
objetodb.on('error',() => {console.log('Error en la conexion a DB')})

module.exports = mongoose