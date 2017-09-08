const { Router } = require('express');

const passport = require('passport');

const attachRoutes = (app, { offersController }) => {
    const router = new Router();

    router
        .get('/all', offersController.getOffers)
        .get('/:id', offersController.getOfferById)
        .post('/add', offersController.addOffer)
        .put('/:id', offersController.addComment);

    app.use('/api/offers', router);
};

module.exports = attachRoutes;