const app = require("../app");
const request = require("supertest");

const user = {
    username: "johnjacob123456789qwertyuioplkjhgfdsarftgys",
    name: "John Jacob Jingleheimerschmidt",
    email: "john@mejjsdfsdfsdfasdfasdfasdfa23453456453.com",
    password: "password"
}
// /books
// returns an array
// should have objects
// title field

// This is a define block. It creates a test suite
// A test suite is a group of related tests.
// this suite is testing a single endpoint. The GET / books route.
// describe("/signup", function () {
// This is a single test. It makes a request to an endpoint
// It asserts/assumes/expects a certain response from the endpoint
// if the correct data is not returned the test fails.
//     test("should create new user to the code snippet", function () {
//         return request(app)
//             .post("/signup")
//             .expect(200)
//             .expect("content-type", "application/json; charset=utf-8")
//             .then(function (res) {
//                 let body = res.body;
//                 // These are assertions. They compare the received data to certain expectations.
//                 // If the assertion is wrong, the test fails.
//                 expect(body).toBeTruthy();
//                 expect(body).toBeInstanceOf(Array);
//                 expect(body[0].title).toBeTruthy();
//             });
//     });

//     // This is a second test. It is testing the same end point but making a different request
//     // and checking for different data.
//     it("should return return only signed SIGNED books", function () {
//         return request(app)
//             .get("/books?signed=true")
//             .expect(200)
//             .expect("content-type", "application/json; charset=utf-8")
//             .then(function (res) {
//                 let body = res.body;
//                 expect(body[0].signed).toBeTruthy();
//             });
//     });
//     // this test should return unsigned books
//     it("should return return only signed UNSIGNED books", function () {
//         return request(app)
//             .get("/books?signed=false")
//             .expect(200)
//             .expect("content-type", "application/json; charset=utf-8")
//             .then(function (res) {
//                 let body = res.body;
//                 console.log("body: ", body);
//                 expect(body[0].signed).toBeFalsy();
//             });
//     });
// });

// This is another test suite that tests anothet endpoint.
describe("POST /signup", function () {
    // This variable will be set once the new books is posted.
    // It will be used by the after all block to delete the new record.
    let newUserId;
    /**
     *  This is an afterAll block. It will run when ALL of the tests in this 
     *  suite have run. 
     * 
     *  This after all block deletes the record that is added  by the post test
     */

    beforeEach(function () {
        // post the user
        console.log("signed up test user")
        return request(app)
            .post("/signup")
            .send(user)
    })

    afterEach(function () {
        // delete the user created in the test
        console.log("do you get here?");
        return request(app).get("/deleteuser");
    });

    it("Should post and save new users", function () {
        // post data to login
        console.log("logged in test user")
        return request(app)
            .post("/login")

            .send(user)
            // .expect(200)
            .expect("content-type", "text/plain; charset=utf-8")
            .expect("username", "johnjacob123456789qwertyuioplkjhgfdsarftgys")
            .expect("email", "john@mejjsdfsdfsdfasdfasdfasdfa23453456453.com")
            .expect("name", "John Jacob Jingleheimerschmidt")
    });
});
