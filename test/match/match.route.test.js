const app = require('../../index');
const request = require("supertest").agent(app.listen());
const config = require('../../config');

describe('Match Route', () =>{

    it('Create Match One', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Match Two', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done();
            });
    });
    it('Create Match Three', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(200)
            .then(response =>{
                response.body.owners.length.should.equal(2);
                done()
            });
    });
    it('Create Match One Fail ', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchOne,
                owners: [config.userOne, config.userTwo],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });
    it('Create Match Two Fail ', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchTwo,
                owners: [config.userTwo, config.userThree],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });
    it('Create Match Three Fail ', done =>{
        request
            .post('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({
                _id: config.matchThree,
                owners: [config.userThree, config.userOne],
            })
            .expect(500)
            .then(response => {
                response.body.should.equal('That Match Already Exists');
                done();
            });
    });

    it('Find Match One', done =>{
        request
            .get('/api/matches/' + config.matchOne)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Match Two', done =>{
        request
            .get('/api/matches/' + config.matchTwo)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });
    it('Find Match Three', done =>{
        request
            .get('/api/matches/' + config.matchThree)
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.owners.should.be.instanceof(Array);
                done();
            });
    });

    it('List All Matches', done =>{
        request
            .get('/api/matches')
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(3);
                done();
            });
    });
    it('List User One Matches', done =>{
        request
            .get('/api/matches/' + config.userOne + '/user' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userOneJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Two Matches', done =>{
        request
            .get('/api/matches/' + config.userTwo + '/user' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userTwoJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });
    it('List User Three Matches', done =>{
        request
            .get('/api/matches/' + config.userThree + '/user' )
            .set('Accept', 'application/json')
            .set('Authorization', 'JWT ' + global.userThreeJwt)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .expect(200)
            .then(response =>{
                response.body.length.should.equal(2);
                done();
            });
    });

});


