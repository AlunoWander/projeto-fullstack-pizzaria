const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clients.controller');
const verify = require('../middleware/verifyJwt');


router.get('/cep/:cep', ctrl.byCep);
router.get('/', verify, ctrl.list);
router.get('/:id', verify, ctrl.get);
router.post('/', verify, ctrl.create);
router.put('/:id', verify, ctrl.update);
router.delete('/:id', verify, ctrl.remove);


module.exports = router;