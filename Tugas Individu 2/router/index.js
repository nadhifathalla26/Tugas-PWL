const router = require('express').Router();
const controller = require('../controller');

// Akun User
router.get('/retrieve_all', controller.retrieveAll);
router.get('/retrieve_by_id/:id', controller.retrieveById);
router.post('/create', controller.tambah);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.hapus);

module.exports = router;
