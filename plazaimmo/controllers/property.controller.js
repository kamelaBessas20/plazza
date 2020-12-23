// Import Model
const Property = require('../models').Property;

/**
 * 
 * List all properties
 */
exports.property_list = (req, res, next) => {
    Property.findAll({ 
    attributes: ['description','price', 'surface', 'keyword', 'characteristics'],
   })
  .then( properties => res.status(200).json(properties))
  .catch( err => console.log(err))
}

/**
 * Add a property
 */
exports.add_property = (req, res, next) => {
    const roperty = req.body;
    Property.create(roperty)
    .then( ropertyCreated => res.status(201).json(ropertyCreated))
    .catch( err => console.log(err))
}
/**
 * 
 * Detail property
 */
exports.detail_property = (req, res, next) =>{
  const id = req.params.id;
  Property.findByPk(id)
  .then( property => res.status(200).json(property))
  .catch( err => console.log(err))
}

/**
 * Edit a property
 */
exports.edit_property = (req, res, next) =>{
  const id = req.params.id;
  const property = req.body;
  Property.update(property, {
    where:{
      id: id
    }
  })
  .then( propertyEdited => res.status(201).json(propertyEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a property
 */
exports.delete_property = (req, res, next) => {
  const id = req.params.id;
  Property.destroy({
    where:{
      id: id
    }
  })
  .then( propertyDeleted => res.status(200).json({message:`Property Deleted ${propertyDeleted}`}))
  .catch( err => console.log(err))
}
