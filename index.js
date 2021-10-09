'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static('/cloudclusters/demo',{index:"index.html"}));
require("./app/routes/turorial.routes")(app);
require("./app/routes/trackerconf.routes")(app);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

