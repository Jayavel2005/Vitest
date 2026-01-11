import { describe, it, expect, test } from "vitest";
import { longestString } from "../src/examples.js";

describe("longestString", () => {

    it("returns the longest string", () => {
        expect(longestString("Java", "coder")).toBe("coder");
    });

    it("returns first string if both have same length", () => {
        expect(longestString("pikachu", "snorlax")).toBe("pikachu");
    });

    test("handles empty strings", () => {
        expect(longestString("", "mario")).toBe("mario");
        expect(longestString("luigi", "")).toBe("luigi");
        expect(longestString("", "")).toBe("");
    });

    it("handles strings with spaces", () => {
        expect(longestString("", "")).toBe("");
    });

    it('should handles the leading or trailing spaces', () => {
        expect(longestString("     mist       ", "ashKetch")).toBe("ashKetch");
    });

});
