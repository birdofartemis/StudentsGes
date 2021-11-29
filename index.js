const exprees = require('express');
const path = require('path');
const app = exprees();

app.use('/user', require('./routes/getUserLogIn'));

app.use(exprees.static('./public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = 3000;

app.listen(port,  () => {
    console.log(`Listenning on port: ${port}`);
});