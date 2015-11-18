'use strict';

const request = require('supertest');
const requireUncached = require('really-need');

const config = require('../../config/all');

describe('API application', () => {
    let server;

    beforeEach(() => {
        server = requireUncached('../../app/api', { bustCache: true });
        server = server.listen(config.port);
    });

    afterEach((done) => {
        server.close(done);
    });

    describe('/restaurant', () => {
        describe('#GET', () => {
            it('respond with json', (done) => {
                request(server)
                    .get('/restaurant')
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200, done);
            });
        });
    });
});
