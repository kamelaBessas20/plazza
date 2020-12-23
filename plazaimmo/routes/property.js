const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const property_controller = require('../controllers/property.controller');

router.get('/property/list', property_controller.property_list);
router.get('/property/detail/:id', property_controller.detail_property);
router.post('/property/add', auth(), property_controller.add_property);
router.put('/property/edit/:id', auth(), property_controller.edit_property);
router.delete('/property/delete/:id', auth(),  property_controller.delete_property);


module.exports = router;
