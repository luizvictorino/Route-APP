// estrutura das rotas do cliente
const express = require('express');
const router = express.Router();

// configuração de redirecionamento
// req --> requisição 
// res --> resposta
router.get('/', (req, res) => {
    console.log("Entrei na rota /");
    res.status(200).send("Entrei nessa rota, chama b");
});

router.get('/adicionar', (req, res) => {
    console.log("Entrei na rota /");
    res.status(200).send("Entrei nessa rota de adicionar cliente");
});


module.exports = router;