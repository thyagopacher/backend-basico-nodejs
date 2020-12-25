const express = require('express');

const app = express();
/** define a rota / para que seja usada via GET*/
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Word' });
});
/** passa a porta para a qual podera ser acessado */
app.listen(3333);