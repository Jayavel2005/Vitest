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

    test.each([
        {weight : 2, coupon : "freeshipping", expected : 0},
        {weight : 10, coupon: "freeshipping" , expected: 0},
        {weight : 12, coupon: "freeshipping", expected: 0},
    ])
    ("applies \'freeshipping'\ coupon exactly for weight weight $weight", ({weight, coupon, expected})=>{
        expect(shippingCost(weight,coupon)).toBe(expected)
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

    test.each([
        {weight: 2, coupon : 2},
        {weight: 10, coupon: 12 },
        {weight: 1, coupon: null},
        {weight: 12, coupon: true}
    ])
    ("throws an error for invalid coupons $coupon\n", ({weight, coupon})=>{
        expect(() => shippingCost(weight, coupon)).toThrow("Coupon must be a string.");
    })
})