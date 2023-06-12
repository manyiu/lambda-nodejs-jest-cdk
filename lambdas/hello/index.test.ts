import { handler } from ".";

describe("handler", () => {
  it("should return 200", async () => {
    const response = await handler({});

    expect(response).toEqual(200);
  });
});
