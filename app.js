const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.use(require('./routes/router').router);

app.listen(PORT, function() {
    console.log('server running ' + PORT);
});