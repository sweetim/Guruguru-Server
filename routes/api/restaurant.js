'use strict';

let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'Ramen Dai',
            location: {
                lat: 32.23,
                lng: 128.23
            },
            description: 'famouse for tonkotsu',
            menu: [
                {
                    name: 'Miso ramen',
                    price: 980,
                    currency: 'Yen'
                },
                {
                    name: 'Shuo ramen',
                    price: 1080,
                    currency: 'Yen'
                },
            ]
        },
        {
            name: 'Ootoya',
            location: {
                lat: 31.23,
                lng: 128.23
            },
            description: 'famouse for family food',
            menu: [
                {
                    name: 'Fry chicken',
                    price: 120,
                    currency: 'Yen'
                },
                {
                    name: 'Fry rice',
                    price: 1080,
                    currency: 'Yen'
                },
            ]
        }
    ]);
});

module.exports = router;
