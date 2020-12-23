const Realtor = require('../models').Realtor;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * List
 */
exports.realtor_list = (req,res, next) => { 
   Realtor.findAll({})
  .then( realtors => res.status(200).json(realtors))
  .catch(err => console.log(err))
}

/**
 * Register
 */
exports.realtor_register = (req, res, next) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
    if(err) {
      throw err
    }
    let realtor = req.body;
    realtor.pwd = hash;
    Realtor.create(realtor)
    .then( data => res.status(201).json(data))
    .catch(error => console.log(error))
  })
}

exports.realtor_login = (req, res, next) => {
    Realtor.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(realtor => {
    if(realtor){
      bcrypt.compare(req.body.pwd, realtor.pwd, (err, result) =>{
        if(err) res.status(500).json(err)
        else{
          if(result){
            const token = jwt.sign({ email: realtor.email, firstname: realtor.firstname, lastname: realtor.lastname}, process.env.SECRET_PHRASE, { expiresIn: '24h'})
            res.status(200).json({token: token});
          }
          else{
            res.status(500).json({message: 'You fail'})
          }
        }
      })
    }
    else{
      res.status(404).json({message: 'Bad login / pwd'})
    }
  })
  .catch(err => res.status(500).json(err)) 
}
