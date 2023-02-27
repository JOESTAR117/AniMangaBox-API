import { FindAllUsersControllers } from "./FindAllUserController";
import { makeMockResponse } from "../../../../utils/mocks/makeMockResponse";

const findAllUser = new FindAllUsersControllers();

describe("FindAllUserController", () => {
  const res = makeMockResponse();

  it("should return all users", async () => {
    const req = {} as Request;
    await findAllUser.handle(res);

    expect(res.state.status).toEqual(200);
  });
});
