const express = require('express');

const app = express();

app.use(express.static('./dist/receipes'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/receipes/'}),
);

app.listen(process.env.PORT || 8080);