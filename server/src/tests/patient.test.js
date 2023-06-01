const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const patientBaseURL = `http://localhost:${process.env.PORT}/patient`;
let patientInstance;

describe("GET /patient", () => {
  const newPatient = {
    firstName: "NEW",
    lastName: "NEW",
    birthDate: "1982-10-06",
    medicalNumber: 345678903,
    email: "NEW@example.com",
    visitations: [
      "64627842a7f90ad6564b6aef",
      "64627847a7f90ad6564b6af1",
      "6462784aa7f90ad6564b6af3",
    ],
  };
  const token = process.env.TEST_TOKEN;

  beforeAll(async () => {
    // set up
    //Tests the create endpoint
    await request(patientBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newPatient);

    //Test the list endpoint
    const response = await request(patientBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    patientInstance = response._body.filter((item) => {
      return item.email === newPatient.email;
    });
  });
  afterAll(async () => {
    //Test the delete endpoint
    await request(patientBaseURL)
      .del(`/${patientInstance[0].email}/delete`)
      .set("Authorization", `Bearer ${token}`);
  });
  it("should return 200 for the list", async () => {
    const response = await request(patientBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the update get", async () => {
    const response = await request(patientBaseURL)
      .get(`/${patientInstance[0].email}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    console.log(patientInstance[0].email);
    const updateData = {
      firstName: "UPDATE",
      lastName: "UPDATE",
      birthDate: "1982-10-06",
      medicalNumber: 987654321,
      email: "UPDATE@example.com",
      visitations: [
        "64627842a7f90ad6564b6aef",
        "64627847a7f90ad6564b6af1",
        "6462784aa7f90ad6564b6af3",
      ],
    };
    const response = await request(patientBaseURL)
      .put(`/${patientInstance[0].email}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
  });
});
