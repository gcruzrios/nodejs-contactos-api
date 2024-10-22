const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaContacto = new schema({
  nombre: String,
  email: String,
  telefono: String,
  empresa: String,
  usuario: String
});

const ModeloContacto = mongoose.model("contactos", schemaContacto);
module.exports = router;

router.get("/ejemplo", (req, res) => {
  res.send("Saludo carga desde ruta ejemplo");
});

router.post("/agregarcontacto", async (req, res) => {
  const nuevocontacto = new ModeloContacto({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    empresa: req.body.empresa,
    usuario:req.body.usuario
  });


  //console.log(nuevousuario);
  nuevocontacto
    .save()
    .then(function () {
      res.send("Contacto agregado correctamente");
    })
    .catch(function (err) {
      console.log(err);
    });
});

//Get usuarios

router.get("/obtenercontactos/:usuario", (req, res) => {
  ModeloContacto.find({ usuario: req.params.usuario})
    .then(function (models) {
      res.send(models);
    })
    .catch(function (err) {
      res.send(err);
    });
});

//Obtener data de usuario
router.get("/obtenercontacto/:id", (req, res) => {
    
//console.log(req.params.id);

  ModeloContacto.find({ _id: req.params.id })
    .then(function (models) {
      res.send(models);
    })
    .catch(function (err) {
      res.send(err);
    });
});

//actualizar usuario
router.put("/actualizarcontacto/:id", (req, res) => {
  ModeloContacto.findOneAndUpdate(
    { _id: req.params.id },
    {
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono,
      empresa: req.body.empresa
    }
  )
    .then(function (models) {
      res.send("Contacto actualizado correctamente");
    })
    .catch(function (err) {
      res.send(err);
    });
});

//Borrar usuario
router.delete("/borrarcontacto/:id", (req, res) => {
  ModeloContacto.findOneAndDelete({ _id: req.params.id })
    .then(function (models) {
      res.send("Contacto eliminado correctamente");
    })
    .catch(function (err) {
      res.send(err);
    });
});
