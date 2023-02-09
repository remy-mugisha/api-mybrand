
const request =require ("supertest");
const app=require("../app");
const Post= require('../models/Posts');

jest.setTimeout(100000);

  describe('Blogs Operations', () => {
    test('should signup the created account', async () => {
        const res = await request(app).post('/api/auth/register').send({
            email: "upwork0@test.com",
            username: "upwork",
            password: "Test@123",
            role:"admin"
        })
        expect(res.statusCode).toBe(200)
        expect(typeof res.body).toBe('object')
    })
    test('should login the user ', async () => {
        const res = await request(app).post('/api/auth/login').send({
            email: "upwork0@test.com",
            password: "Test@123"
        })
        token = res.body.token;
        id = res.body.data._id;
        expect(res.statusCode).toBe(200)
        expect(typeof res.body).toBe('object')
    })
    test('should return all posts', async () => {
        const res = await request(app).get('/api/posts/all')
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
    test('should return single post ', async () => {
            const res = await request(app).get(`/api/posts/${id}`)
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
    })
    test('should delete a post', async () => {
        const res = await request(app).delete(`/api/posts/delete/${id}`).
            set('token', `Bearer ${token}`)
            expect(res.statusCode).toBe(200)
    })
    
})