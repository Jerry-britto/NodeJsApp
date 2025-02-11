const request = require("supertest");
const app = require("../index.js");

describe("API Endpoints", () => {

  test("GET / should return a plain message'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(
      "Hello, World! This is my Node.js app! How was your day"
    );
  });

  test("GET /heatlh should return HTML with a message", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(
      "<h1>Everything is ok what about you is everything fine</h1>"
    );
  });

});
