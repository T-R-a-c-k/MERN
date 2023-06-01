const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const prescriptionBaseURL = `http://localhost:${process.env.PORT}/prescription`;
let prescriptionInstance;

describe("GET /prescription", () => {
  const newPrescription = {
    name: "ZZZZZZZNEW",
    usage: "NEW",
    sideEffects: ["NEW"],
  };
  const token = process.env.TEST_TOKEN;

  beforeAll(async () => {
    // set up
    //Tests the create endpoint
    await request(prescriptionBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newPrescription);

    //Test the list endpoint
    const response = await request(prescriptionBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    prescriptionInstance = response._body.filter((item) => {
      return item.name === newPrescription.name;
    });
  });
  afterAll(async () => {
    //Test the delete endpoint
    await request(prescriptionBaseURL)
      .del(`/${prescriptionInstance[0].name}/delete`)
      .set("Authorization", `Bearer ${token}`);
  });
  it("should return 200 for the list", async () => {
    const response = await request(prescriptionBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the update get", async () => {
    const response = await request(prescriptionBaseURL)
      .get(`/${prescriptionInstance[0].name}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    const updateData = {
      name: "UPDATE Prescription",
      location: "UPDATE Building",
      budget: 7654321,
    };
    const response = await request(prescriptionBaseURL)
      .put(`/${prescriptionInstance[0].name}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);
  });
});
