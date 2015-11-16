'use strict';

const request = require('supertest');
const requireUncached = require('really-need');

describe('Main routes', () => {
    let server;

    beforeEach(() => {
        server = requireUncached('../../server', { bustCache: true });
    });

    afterEach((done) => {
        server.close(done);
    });

    describe('#GET /', () => {
        it('respond with html', (done) => {
            request(server)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect(200, done);
        });
    });

    describe('#GET /restaurant', () => {
        it('respond with html', (done) => {
            request(server)
                .get('/')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect(200, done);
        });
    });

    describe('#GET other routes', () => {
        it('respond with error', (done) => {
            request(server)
                .get('/err')
                .expect('Content-Type', 'text/html; charset=utf-8')
                .expect(404, done);
        });
    });
});
