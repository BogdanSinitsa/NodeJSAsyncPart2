import userApi from './user-api';

import express from 'express';
import Router from 'express-promise-router';
import co from 'co';

const app = express();

let router = Router();

router.get('/first',  co.wrap(function* (req, res) {
    let users = yield userApi.getUserListPromise();
    let userDetails = yield userApi.getUserDetailsPromise(users[0].id);
    res.send(userDetails);
}));

router.get('/all', co.wrap(function* (req, res) {
    let users = yield userApi.getUserListPromise();
    let results = yield Promise.all(users.map(user => userApi.getUserDetailsPromise(user.id)));
    res.send(results);
}));

//Error
router.get('/first-user-city', co.wrap(function* (req, res) {
    let users = yield userApi.getUserListPromise();
    let userDetails = yield userApi.getUserDetailsPromise(users[0].id);
    res.send(userDetails.addresses[0].city); //Error here
}));

app.use(router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});