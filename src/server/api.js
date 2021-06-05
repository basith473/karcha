// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');

const jsforce = require('jsforce');

require('dotenv').config();

const app = express();
app.use(helmet());
app.use(compression());

const HOST = process.env.API_HOST || 'localhost';
const PORT = process.env.API_PORT || 3002;

//connect to salesforce
const { SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL } = process.env;
if (!(SF_USERNAME, SF_PASSWORD, SF_TOKEN, SF_LOGIN_URL)) {
    console.error('Cannot start app: missing mandatory configs');
    process.exit(-1);
}

const conn = new jsforce.Connection({
    loginUrl: SF_LOGIN_URL
});

conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, err => {
    if(err) {
        console.error(err);
        process.exit(-1);
    }
});

app.get('/api/expenses', (req, res) => {
    const soql = `SELECT Id, Name, Type__c, Category__c, Amount__c, Description__c, Trans_Date__c FROM Budget__c`;
    conn.query(soql, (err, result) => {
        if(err) {
            res.sendStatus(500);
        } else if(result.reords.length === 0){
            res.status(404).send('Seesion not found');
        } else {
            let expenses = [];
            const formattedData = result.records.map(expenseRecord => {
                return {
                    
                }
            })
        }
    })
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started: http://${HOST}:${PORT}/api/v1/endpoint`
    )
);
