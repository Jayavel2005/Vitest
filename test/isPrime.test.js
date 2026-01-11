import {describe, test, expect} from "vitest";
import {isPrime} from "../src/isPrime.js";


describe("isPrime", ()=>{
    test("returns true/truthy for small prime numbers", ()=>{
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBeTruthy();
    })

    test("returns false/falsy for non-prime numbers", ()=>{
        expect(isPrime(6)).toBe(false);
        expect(isPrime(10)).toBeFalsy();
    })

    test("matches results in an array using toEqual", ()=>{
        const results = [1,2,3].map(num => isPrime(num));
        expect(results).toEqual([false, true, true]);
    })

    test("detects primes within a filtered list using contains", ()=>{
        const nums = [1,2,3,4,5,6,7];
        const filter = nums.filter(num => isPrime(num));

        expect(filter).toContain(5);
        expect(filter).not.toContain(8);
    })

    test("throws an error when passed s non-number", ()=>{
        expect(()=>isPrime('pika')).toThrow("Input must be a number")
    })

    test("has correct type for result", ()=>{
        expect(isPrime(5)).toBeTypeOf("boolean");
        expect(typeof isPrime(4)).toBe("boolean");
    })

    test("treats 0 and 1 as non-prime", ()=>{
        expect(isPrime(0)).toBeFalsy();
        expect(isPrime(1)).toBe(false);
    })

    test("returns for all even number which is > 2", ()=>{
        expect(isPrime(6)).toBeFalsy();
        expect(isPrime(10)).toBeFalsy();

    })

    test("returns false for perfect squares", ()=>{
        expect(isPrime(81)).toBeFalsy();
    })

    test("testing against a non-integer", ()=>{
        expect(isPrime(2.5)).toBe(false);
    })

})