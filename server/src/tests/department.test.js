const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const departmentBaseURL = `http://localhost:${process.env.PORT}/department`;
let departmentInstance;

describe("GET /department", () => {
  const newDepartment = {
    name: "New Department",
    location: "New Building",
    budget: 1234567,
  };
  const updateData = {
    name: "UPDATE Department",
    location: "UPDATE Building",
    budget: 7654321,
  };
  const token = process.env.TEST_TOKEN;

  beforeEach(async () => {
    // set up
    //Tests the create endpoint
    await request(departmentBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newDepartment);

    //Test the list endpoint
    const response = await request(departmentBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    departmentInstance = response._body.filter((item) => {
      return item.name === newDepartment.name;
    });
  });
  afterEach(async () => {
    //Test the delete endpoint
    const response = await request(departmentBaseURL)
      .del(`/${departmentInstance[0]._id}/delete`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the list", async () => {
    const response = await request(departmentBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the update get", async () => {
    const response = await request(departmentBaseURL)
      .get(`/${departmentInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    const response = await request(departmentBaseURL)
      .put(`/${departmentInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
    Object.keys(updateData).forEach((item) => {
      departmentInstance[0][item] = updateData[item];
    });
  });
});
