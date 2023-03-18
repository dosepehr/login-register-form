const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CLIENT_ID = 'e197d9e5999efbb20ba4';
const SECRET_ID = 'b144845a0a725ea42e753ef08b65e945b8e1393f';

const server = express();
server.use(cors());
server.use(bodyParser.json());
// ! getting accessToken
server.get('/getAccessToken', async function (req, res) {
    const params = `?client_id=${CLIENT_ID}&client_secret=${SECRET_ID}&code=${req.query.code}`;
    const response = await fetch(
        `https://github.com/login/oauth/access_token${params}`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
        }
    );
    const data = await response.json();
    res.send(data);
});
// ! getting user data based on accessToken
server.get('/getUserData', async function (req, res) {
    req.get('Authorization');
    const response = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: req.get('Authorization'),
        },
    });
    const data = await response.json();
    res.send(data);
});

server.listen(4000, () => {
    console.log('server running on port 4000');
});
