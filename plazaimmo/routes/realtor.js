const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const realtor_controller = require('../controllers/realtor.controller');

router.get('/realtor/list', auth(), realtor_controller.realtor_list);
router.post('/register', raltor_controller.realtor_register);
router.post('/login', realtor_controller.realtor_login);

module.exports = router;
