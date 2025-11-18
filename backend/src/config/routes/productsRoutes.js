const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/products.controller');
const verify = require('../middleware/verifyJwt');


router.get('/', ctrl.list);
router.post('/', verify, ctrl.create);
router.put('/:id', verify, ctrl.update);
router.delete('/:id', verify, ctrl.remove);


module.exports = router;