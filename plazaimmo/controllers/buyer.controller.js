const Bayer = require('../models').Bayer;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * List
 */
exports.bayer_list = (req,res, next) => {
    Bayer.findAll({

    })
  .then( bayers => res.status(200).json(bayers))
  .catch(err => console.log(err))
}

exports.detail_bayer = (req, res, next) =>{
  const id = req.params.id;
  Bayer.findByPk(id)
  .then( bayer => res.status(200).json(bayer))
  .catch( err => console.log(err))
}

/**
 * Edit a aayer
 */
exports.edit_bayer = (req, res, next) =>{
  const id = req.params.id;
  const bayer = req.body;
  Bayer.update(bayer, {
    where:{
      id: id
    }
  })
  .then( bayerEdited => res.status(201).json(bayerEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a bayer
 */
exports.delete_bayer = (req, res, next) => {
  const id = req.params.id;
  Bayer.destroy({
    where:{
      id: id
    }
  })
  .then( bayerDeleted => res.status(200).json({message:`Bayer Deleted ${bayerDeleted}`}))
  .catch( err => console.log(err))
}
