import {shippingCost} from "../src/shippingCost.js";
import {describe, test, expect, it} from "vitest";


describe("shippingCost.js", ()=>{

    test("returns a number", ()=>{
        expect(typeof shippingCost((2))).toBe("number");
    })

    it.each([
        {weight : 0.5, expected : 3.99},
        {weight : 4, expected : 5.99},
        {weight : 10, expected :8.99 },
        {weight : 30, expected : 14.99}
        ])("charges $expected for weights $weight", ({weight, expected})=> {
        expect(shippingCost(weight)).toBe(expected);
    });

    // boundary test

    test.each([
        {weight : 1, expected : 3.99},
        {weight : 5, expected: 5.99},
        {weight: 20, expected: 8.99},
        {weight: 21, expected: 14.99}
    ])("checks for boundary weight $weight => $expected", ({weight, expected})=>{
        expect(shippingCost(weight)).toBe(expected);
    })

    test("applies freeshipping coupon exactly", ()=>{
        expect(shippingCost(2, 'freeshipping')).toBe(0);
        expect(shippingCost(259, 'freeshipping')).toBe(0);
    })

    test.each([
        {weight : 1,coupon : "FREESHIPPING" ,expected : 3.99},
        {weight: 3, coupon: "NOTHING", expected: 5.99},
        {weight: 5.99, coupon: "", expected: 8.99}
    ])("ignores non-matching coupons such as $coupon", ({weight, coupon, expected})=>{
        expect(shippingCost(weight, coupon)).toBe(expected);
    })

    test.each([
        {weight : 0, error : "Weight must be greater than 0."},
        {weight : '6', error : "Weight must be a number"},
        {weight : "111", error : "Weight must be a number"}
    ])("throws an error for invalid weight $weight", ({weight, error})=>{
        expect(() => shippingCost(weight)).toThrow(error);
    })

    test("throws an error for invalid coupons", ()=>{
        expect(()=>shippingCost(3,4)).toThrow();
        expect(()=> shippingCost(10,45)).toThrow()
        expect(()=> shippingCost(3, null)).toThrow();
    })
})