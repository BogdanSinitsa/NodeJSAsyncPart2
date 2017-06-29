import userApi from './user-api';

import express from 'express';
import Router from 'express-promise-router';

const app = express();

let router = Router();

router.get('/first', async function (req, res) {
    let users = await userApi.getUserListPromise();
    let userDetails = await userApi.getUserDetailsPromise(users[0].id);
    res.send(userDetails);
});

router.get('/all', async function (req, res) {
    let users = await userApi.getUserListPromise();
    let results = await Promise.all(users.map(user => userApi.getUserDetailsPromise(user.id)));
    res.send(results);
});

//Error
router.get('/first-user-city', async function (req, res) {
    let users = await userApi.getUserListPromise();
    let userDetails = await userApi.getUserDetailsPromise(users[0].id);
    res.send(userDetails.addresses[0].city);
});

app.use(router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});