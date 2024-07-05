import * as chai from "chai";
const expect=chai.expect;
import chaiHttp from "chai-http";
import app from "../index.js";
import faker from "faker"


const c=chai.use(chaiHttp)

describe('GET /api/info',()=>{
    it('should GET all info',(done)=>{
        c.request(app)
        .get('/api/info').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).to.not.have.lengthOf(0)
            done()
        })
    })
})

describe('POST /api/info',()=>{
    it('should POST a component',(done)=>{
        let prueba={
            tiulo:faker.Lorem.words(1)[0],
            descripcion:faker.Lorem.paragraph(1)[0],
            img:faker.Image.animals(),
        }
        console.log(prueba)
        c.request(app)
        .post('/api/info')
        .send(prueba)
        .end((err,res)=>{
            expect(err).to.be
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('object')
            expect(res.body).to.have.property('prueba')
        })
        done()
    })
})

describe('GET /api/info/:id',()=>{
    it('should GET all info by id',(done)=>{
        c.request(app)
        .get('/api/info/1')
        .end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.property('idM')
            expect(res.body.enviar.id).to.equal(1)
            done()
        })
    })
})
