import {describe,it, expect} from "vitest";
import {longestString} from "../src/examples.js";
describe("longestString", ()=>{
    it("returns the  longest length String", ()=>{
        expect(longestString("Java", "coder")).toBe("coder")
    })
})