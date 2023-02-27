import { Request } from "express";
import { makeMockResponse } from "../../../../utils/mocks/makeMockResponse";
import { CreateUserController } from "./CreateUserControllers";

const createUser = new CreateUserController();

describe("CreateUserController", () => {
  const res = makeMockResponse();
  it("Should return the status 201 of the created user", async () => {
    const req = {
      body: {
        name: "Bob",
        email: "bob@gmail.com",
        password: 123,
      },
    } as Request;

    await createUser.handle(req, res);

    expect(res.state.status).toEqual(201);
  });
});
