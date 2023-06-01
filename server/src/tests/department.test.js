const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const deparmentBaseURL = `http://localhost:${process.env.PORT}/department`;
let departmentInstance;

describe("GET /department", () => {
  const newDepartment = {
    name: "New Department",
    location: "New Building",
    budget: 1234567,
  };
  const token = process.env.TEST_TOKEN;

  beforeAll(async () => {
    // set up
    //Tests the create endpoint
    await request(deparmentBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newDepartment);

    //Test the list endpoint
    const response = await request(deparmentBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    departmentInstance = response._body.filter((item) => {
      return item.name === newDepartment.name;
    });
  });
  afterAll(async () => {
    //Test the delete endpoint
    await request(deparmentBaseURL)
      .del(`/${departmentInstance[0]._id}/delete`)
      .set("Authorization", `Bearer ${token}`);
  });
  it("should return 200 for the list", async () => {
    const response = await request(deparmentBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the update get", async () => {
    const response = await request(deparmentBaseURL)
      .get(`/${departmentInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    const updateData = {
      name: "UPDATE Department",
      location: "UPDATE Building",
      budget: 7654321,
    };
    const response = await request(deparmentBaseURL)
      .put(`/${departmentInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
  });
});
