const express = require('express');
const app = express();
const path = require('path');
const publicFolderPath = path.resolve(__dirname, './public'); 

app.use(express.static(publicFolderPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Servidor corriendo en el puerto 3000.'));