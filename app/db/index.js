const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// const config = require('../../config').get(process.env.NODE_ENV);
// mongoose.set('debug', true);
var connectWithRetry = function () {
    return mongoose.connect("mongodb://localhost:27017/futured", {
        useNewUrlParser: true,
        useCreateIndex: true,
        // reconnectTries: 300,
        // reconnectInterval: 5000,
        // autoReconnect: true,
        poolSize: 100,
        keepAlive: true,
        keepAliveInitialDelay: 300000,
        useUnifiedTopology: true
        // bufferMaxEntries: 0,
        // bufferCommands: false,
        // replicaSet: 'rs0',
    }, function (err) {
        if (err) {
            console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
            setTimeout(connectWithRetry, 5000);
        } else {
            console.error('Connection open to ' + "mongodb://localhost:27017/futured");
        }
    });

};
mongoose.connection.on('disconnect', () => {
    setTimeout(connectWithRetry, 5000);
})

connectWithRetry();
