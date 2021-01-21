const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const app = require("../server");

describe("POST /login", () => {
  it("should return status 200", async () => {
    let res = await chai
      .request(app)
      .post("/login")
      .send({ username: "test_user" });

    expect(res.status).to.equal(200);
    expect(res.body.username).to.equal("test_user");
  });
});
