
// const request =require ("supertest");
// const app=require("../app");
// let token;
// let id;
// const updateUser = {
//   username: 'remy',
//   email: 'remy@gmail.com',
//   message: 'Hello I want to hire you',
// };

// jest.setTimeout(100000);
// describe('\ntesting message routes', () => {
//         describe('POST api/users/login', () => {
//             test('should signup the created account', async () => {
//             const res = await request(app).post('/api/auth/register').send({
//                 email: "rem@test.com",
//                 username: "remy12345",
//                 password: "Remy$123",
//                 role:"admin"
//             })
//             expect(res.statusCode).toBe(200)
//             expect(typeof res.body).toBe('object')
//         })
//         test('should return the token of user who logged account', async () => {
//             const res = await request(app).post('/api/auth/login').send({
//                 email: "remy@test.com",
//                 password: "Remy$123"
//             })
//             token = res.body.token;
//             console.log(res.body)
//             expect(res.statusCode).toBe(200)
//             expect(typeof res.body).toBe('object')
//         })
//    }) 
//         describe('GET api/messages', () => {
//             test('should return all messages in array', async () => {
//                 const res = await request(app).get('/api/messages')
//                 .set('token', `Bearer ${token}`)
//                 expect(res.statusCode).toBe(200)
//                 expect(Array.isArray(res.body)).toBe(true)
//             })
//             test('should send a message', async () => {
//                 const res = await request(app).post('/api/messages/create')
//                 .send(updateUser)
//                 expect(res.statusCode).toBe(200)
//                 id = res.body._id;
//             })
//             test('should get  message by id', async () => {
//                 const res = await request(app).get(`/api/messages/${id}`)
//                 .set('token', `Bearer ${token}`)
//                 expect(res.statusCode).toBe(200)
//             })
//             test('should delete a message', async () => {
//             const res = await request(app).delete(`/api/messages/delete/${id}`).
//             set('token', `Bearer ${token}`)
//             expect(res.statusCode).toBe(200)
//         })
//         })
//     })
