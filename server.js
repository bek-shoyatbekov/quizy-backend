const http = require('http');

const app = require('./src/app.js');
const configs = require('./src/configs/index.js');
const connectDB = require('./src/utils/database/connectDB.js');

const server = http.createServer(app);



server.listen(configs.app.port, async () => {
    await connectDB();
    console.log('Server running on port %s', configs.app.port);
})