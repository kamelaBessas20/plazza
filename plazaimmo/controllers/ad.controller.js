// Import Model
const Ad = require('../models').Ad;

/**
 * 
 * List all ads
 */
exports.ad_list = (req, res, next) => {
    Ad.findAll({ 
    attributes: ['dateStart','dateEnd', 'status'],
   })
  .then( ads => res.status(200).json(ads))
  .catch( err => console.log(err))
}

/**
 * Add a ad
 */
exports.add_ad = (req, res, next) => {
    const ad = req.body;
    Ad.create(ad)
    .then( adCreated => res.status(201).json(adCreated))
    .catch( err => console.log(err))
}
/**
 * 
 * Detail ad
 */
exports.detail_ad = (req, res, next) =>{
  const id = req.params.id;
  Ad.findByPk(id)
  .then( ad => res.status(200).json(ad))
  .catch( err => console.log(err))
}

/**
 * Edit a ad
 */
exports.edit_ad = (req, res, next) =>{
  const id = req.params.id;
  const ad = req.body;
  Ad.update(ad, {
    where:{
      id: id
    }
  })
  .then( adEdited => res.status(201).json(adEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a ad
 */
exports.delete_ad = (req, res, next) => {
  const id = req.params.id;
  Ad.destroy({
    where:{
      id: id
    }
  })
  .then( adDeleted => res.status(200).json({message:`Ad Deleted ${aDeleted}`}))
  .catch( err => console.log(err))
}
