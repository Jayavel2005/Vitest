import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("Add two positive integers", () => {
  it("returns addition of two postive numbers", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
  });
});



describe("Addition of one postive integer and negative integer", ()=>{
    it("returns addtion of one negative and positive numbers", ()=>{
        expect(sum(4, -1)).toBe(3);
    })
})
