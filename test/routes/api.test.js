'use strict';

const request = require('supertest');
const requireUncached = require('really-need');

describe('API routes', () => {
    let server;

    beforeEach(() => {
        server = requireUncached('../.././server', { bustCache: true });
    });

    afterEach((done) => {
        server.close(done);
    });

    describe('/api', () => {
        describe('/restaurant', () => {
            describe('#GET', () => {
                it('respond with json', (done) => {
                    request(server)
                        .get('/api/restaurant')
                        .expect('Content-Type', 'application/json; charset=utf-8')
                        .expect(200, done);
                });
            });
        });
    });
});
