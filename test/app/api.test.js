'use strict';

const request = require('supertest');
const requireUncached = require('really-need');

describe('API application', () => {
    let server;

    beforeEach(() => {
        server = requireUncached('../../app/api', { bustCache: true });
        server = server.listen(3000);
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
