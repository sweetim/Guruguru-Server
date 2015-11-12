'use strict';

const mainPage = {
    features: {
        title: 'Why guruguru?',
        description: 'There are so many benifits using our services, and we promise that once you tried it you will never leave without it',
        features: [
            {
                title: 'Eating Behaviour',
                description: 'We will learn about your eating behaviour and provide you with suggest the best food and restaurant for you',
                image: 'img/behaviour.png'
            },
            {
                title: 'Reward',
                description: 'Check in every restaurant you eat, to get additional rewards from the restaurant',
                image: 'img/reward.png'
            },
            {
                title: 'Analytics',
                description: 'We will learn about your eating behaviour whenever you order food using our services',
                image: 'img/analytics.png'
            }
        ]
    },
    mobile: {
        title: 'Coming soon!',
        description: 'We are working very hard to bring you the best experience when using our services',
        features: [
            {
                title: 'Android',
                description: 'Coming soon',
                image: 'img/playstore.png'
            },
            {
                title: 'iOS',
                description: 'Coming soon',
                image: 'img/appstore.png'
            }
        ]
    }
};

module.exports = {
    mainPage: mainPage
};
