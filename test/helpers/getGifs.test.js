import { expect, describe, test } from "@jest/globals";
import { getGifs } from "../../src/helpers/getGifs";


describe("testing getGifs function", () => {

  const category = "dragon";

  test("should return gif object", async () => {

    const gifs = await getGifs(category);

    expect(gifs.length).toBeGreaterThan(0);

    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    })
  });
});
