const app = require('./app');

// Define em qual porta o servidor vai estar ouvindo as requisições
const PORT = process.env.PORT || 3000;

// Configuração para ouvir a requisição na porta configurada ou na porta 3000 caso não esteja configurada
app.listen(PORT, () => {
    // Mensagem para saber que o servidor está funcionando
    console.log(`Servidor está iniciado na porta: ${PORT}`);
});

