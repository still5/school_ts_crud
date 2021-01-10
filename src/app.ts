//can have full API routing for CRUD (will be plus) 
//OR in simplified version can only call getAllTeachers + getTargetMathTeachers and log output of both
import "reflect-metadata";


enum Membership {
    Trial,
    Standard,
    Premium
}

const membership = Membership.Standard
const membershipIndex = Membership[1]
const membershipName = Membership[2]

console.log(membership)
console.log('Index: ',membershipIndex)
console.log('Premium: ',membershipName)

/////////////

const express = require('express');
const app = express();
//const indexRoutes = require('./routes/index');
const portToListen = process.env.NODE_PORT;

const postgresConnect = require('./db');

app.use((req: string, res: string, next: string) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //next();
});

/*postgresConnect(client => {
    //console.log(client);
    app.listen(portToListen);
})
*/