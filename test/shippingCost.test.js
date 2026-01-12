import {shippingCost} from "../src/shippingCost.js";
import {describe, test, expect} from "vitest";


describe("shippingCost.js", ()=>{

    test("returns a number", ()=>{
        expect(typeof shippingCost((2))).toBe("number");
    })

    test("it charges prices for interior weights", ()=>{
        expect(shippingCost(0.5)).toBe(3.99);
        expect(shippingCost(4)).toBe(5.99);
        expect(shippingCost(10)).toBe(8.99)
        expect(shippingCost(30)).toBe(14.99);
    });

    // boundary test

    test("it charges prices for edge weights", ()=>{
        expect(shippingCost(1)).toBe(3.99);
        expect(shippingCost(5)).toBe(5.99);
        expect(shippingCost(20)).toBe(8.99);
        expect(shippingCost(21)).toBe(14.99);
    })

    test("applies freeshipping coupon exactly", ()=>{
        expect(shippingCost(2, 'freeshipping')).toBe(0);
        expect(shippingCost(259, 'freeshipping')).toBe(0);
    })

    test("ignores non-matching coupons", ()=>{
        expect(shippingCost(1, "FREESHIPPING")).toBe(3.99);
        expect(shippingCost(3, "NOTHING")).toBe(5.99);
        expect(shippingCost(5.99)).toBe(8.99);
    })

    test("throws an error for invalid weights", ()=>{
        expect(()=>shippingCost(0)).toThrow();
        expect(()=> shippingCost('3')).toThrow();
        expect(()=> shippingCost("10")).toThrow("Weight must be a number");
    })

    test("throws an error for invalid coupons", ()=>{
        expect(()=>shippingCost(3,4)).toThrow();
        expect(()=> shippingCost(10,45)).toThrow()
        expect(()=> shippingCost(3, null)).toThrow();
    })
})