
const request =require ("supertest");
const app=require("../app");
let token;
const updateUser = {
  username: 'remi1',
  email: 'remier01@gmail.com',
  password: 'remier!!123',
};

jest.setTimeout(100000);
describe('\ntesting users routes', () => {
    describe('POST api/auth/register', () => {
        test('should signup the created account', async () => {
            const res = await request(app).post('/api/auth/register').send({
                email: "remy@test.com",
                username: "remy12345",
                password: "Remy&123",
                role:"admin"
            })
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })

        test('should return 200 for the account existing', async () => {
            const res = await request(app).post('/api/auth/register').send({
                email: "remy@test.com",
                username: "remy1",
                password: "Remy#123"
            })
            expect(res.statusCode).toBe(200)
        })

        test('should return 400 for entering not good request', async () => {
            const res = await request(app).post('/api/users/signup').send({
                username: "NEW1",
                password: "Remy&123"
            })
            expect(res.statusCode).toBe(404)
        })
    })

    describe('POST api/users/login', () => {
        test('should return the token of user who logged account', async () => {
            const res = await request(app).post('/api/auth/login').send({
                email: "email1170@test.com",
                password: "Remy@123"
            })
            token = res.body.token;
            id = res.body.data._id;
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
        test('should return 401 for entering unexist email', async () => {
                    const res = await request(app).post('/api/auth/login').send({
                        email: "remy@test.com",
                        password: "Remy@123"
                    })
                    expect(res.statusCode).toBe(401)
                    expect(typeof res.body).toBe('object')
        })
        test('should return 401 for entering bad request', async () => {
            const res = await request(app).post('/api/auth/login').send({
                email: "remy@test.com"
            })
            expect(res.statusCode).toBe(401)
            expect(typeof res.body).toBe('object')
        })
})


    describe('GET api/user', () => {
        test('should return user info', async () => {
            const res = await request(app).get('/api/user').
            set('token', `Bearer ${token}`)
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
        test('should return single user info', async () => {
            const res = await request(app).get(`/api/user/${id}`).
            set('token', `Bearer ${token}`)
            expect(res.statusCode).toBe(200)
            expect(typeof res.body).toBe('object')
        })
        test('should return 401 for invalid token', async () => {
            let invalid = '' + token
            invalid = invalid.substring(0, invalid.length - 2)
            const res = await request(app).get('/api/user').set({
                Authorization: 'Bearer ' + invalid
            })
            expect(res.statusCode).toBe(401)
        })
        test('should return 401 for not being authorized', async () => {
            const res = await request(app).get('/api/user')
            expect(res.statusCode).toBe(401)
        })
        test('should update a user', async () => {
            const res = await request(app).put(`/api/user/update/${id}`).
            set('token', `Bearer ${token}`)
            .send(updateUser)
            expect(res.statusCode).toBe(200)
        })
        test('should delete a user', async () => {
            const res = await request(app).delete(`/api/user/delete/${id}`).
            set('token', `Bearer ${token}`)
            expect(res.statusCode).toBe(200)
        })
    })
})