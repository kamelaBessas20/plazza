const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const ad_controller = require('../controllers/ad.controller');

router.get('/ad/list', auth(), ad_controller.ad_list);
router.get('/ad/detail/:id', auth(), ad_controller.detail_ad);
router.post('/ad/add', auth(), ad_controller.add_ad);
router.put('/ad/edit/:id', auth(), ad_controller.edit_ad);
router.delete('/ad/delete/:id', auth(), ad_controller.delete_ad);


module.exports = router;