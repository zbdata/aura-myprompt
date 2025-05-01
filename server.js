const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { user_id, account_id, auth_token } = req.query;

    if (user_id && account_id && auth_token) {
        res.send(`
            <h1>Variáveis Recebidas</h1>
            <p><strong>User ID:</strong> ${user_id}</p>
            <p><strong>Account ID:</strong> ${account_id}</p>
            <p><strong>Auth Token:</strong> ${auth_token}</p>
        `);
    } else {
        res.send(`
            <h1>Erro</h1>
            <p>Alguma variável está faltando!</p>
        `);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});