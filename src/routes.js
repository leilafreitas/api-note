const express= require('express');
const router = express.Router();
const controller= require('./controllers/noteController');
//TODAS AS ROTAS ESTABELECIDAS E SUAS RESPECTIVAS FUNÇÕES
router.get('/ping',controller.ping);
router.get('/notes',controller.all);
router.get('/note/:id',controller.one);
router.post('/note',controller.add);
router.put('/note/:id', controller.update);
router.delete('/note/:id', controller.delete);

module.exports = router;