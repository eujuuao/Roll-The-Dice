const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post('/roll', (req, res) => {
    const { diceType } = req.body;

    if (!diceType || ![4, 6, 8, 10, 12, 20].includes(diceType)) {
        return res.status(400).json({ error: 'Tipo de dado inválido' });
    }

    const rollResult = Math.floor(Math.random() * diceType) + 1;

    res.json({ result: rollResult });
});
