const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const bayer_controller = require('../controllers/bayer.controller');

router.get('/bayer/list', auth(), bayer_controller.bayer_list);
router.get('/bayer/:id', auth(), bayer_controller.detail_bayer);
router.put('/bayer/edit/:id', auth(), bayer_controller.edit_bayer);
router.delete('/bayer/delete/:id', auth(),  bayer_controller.delete_bayer);


module.exports = router;