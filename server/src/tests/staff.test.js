const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const staffBaseURL = `http://localhost:${process.env.PORT}/staff`;
let staffInstance;

describe("GET /staff", () => {
  const newStaff = {
    firstName: "NEW",
    lastName: "NEW",
    position: "NEW",
    salary: 80000,
    deptID: "64627915a7f90ad6564b6b2b",
    phoneNumber: "555-123-7890",
    email: "new.something@example.com",
    hireDate: "2023-05-23T00:00:00Z",
    password: "Q3s#F6gN&9m^W2eD",
    role: "NEW",
  };

  const updateData = {
    firstName: "UPDATE",
    lastName: "UPDATE",
    position: "UPDATE",
    salary: 80000,
    deptID: "64627915a7f90ad6564b6b2b",
    phoneNumber: "555-123-7890",
    email: "update.something@example.com",
    hireDate: "2023-05-23T00:00:00Z",
    password: "Q3s#F6gN&9m^W2eD",
    role: "UPDATE",
  };
  const token = process.env.TEST_TOKEN;

  beforeEach(async () => {
    // set up
    //Tests the create endpoint
    await request(staffBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newStaff);

    //Test the list endpoint
    const response = await request(staffBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    staffInstance = response._body.filter((item) => {
      return item.email === newStaff.email;
    });
  });
  afterEach(async () => {
    //Test the delete endpoint

    const response = await request(staffBaseURL)
      .del(`/${staffInstance[0].email}/delete`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    console.log(response._body);
  });
  it("should return 200 for the list", async () => {
    const response = await request(staffBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the update get", async () => {
    const response = await request(staffBaseURL)
      .get(`/${staffInstance[0].email}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    const response = await request(staffBaseURL)
      .put(`/${staffInstance[0].email}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);

    expect(response.statusCode).toBe(200);
    staffInstance[0] = updateData;
  });
  it("should return 200 for the login post", async () => {
    const response = await request(staffBaseURL).post(`/login`).send(newStaff);

    expect(response.statusCode).toBe(200);
  });
});
