const request = require("supertest");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const visitationBaseURL = `http://localhost:${process.env.PORT}/visitation`;
let visitationInstance;

describe("GET /visitation", () => {
  const newVisitation = {
    occurredDate: "2025-06-28T10:25:00.000Z",
    note: "NEW",
    prescription: ["646264e73f4e1f7453cba8ae"],
  };
  const updateData = {
    occurredDate: "2025-06-28T10:25:00.000Z",
    note: "UPDATE",
    prescription: ["646264e73f4e1f7453cba8ae", "646264f03f4e1f7453cba8b2"],
  };
  const token = process.env.TEST_TOKEN;

  beforeEach(async () => {
    // set up
    //Tests the create endpoint
    await request(visitationBaseURL)
      .post("/create")
      .set("Authorization", `Bearer ${token}`)
      .send(newVisitation);

    //Test the list endpoint
    const response = await request(visitationBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);

    visitationInstance = response._body.filter((item) => {
      return (
        item.note === newVisitation.note &&
        item.occurredDate === newVisitation.occurredDate &&
        item.prescription.filter((element, index) => {
          return element === newVisitation[index];
        })
      );
    });
  });
  afterEach(async () => {
    //Test the delete endpoint
    const response = await request(visitationBaseURL)
      .del(`/${visitationInstance[0]._id}/delete`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });
  it("should return 200 for the list", async () => {
    const response = await request(visitationBaseURL)
      .get("/list")
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update get", async () => {
    const response = await request(visitationBaseURL)
      .get(`/${visitationInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 200 for the update post", async () => {
    const response = await request(visitationBaseURL)
      .put(`/${visitationInstance[0]._id}/update`)
      .set("Authorization", `Bearer ${token}`)
      .send(updateData);
    expect(response.statusCode).toBe(200);

    //This should be some form of key comparison but this works as is and theres no plan to change this object for th
    //foreseeable future

    Object.keys(updateData).forEach((item) => {
      visitationInstance[0][item] = updateData[item];
    });
  });
});
