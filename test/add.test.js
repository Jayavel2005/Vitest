import {describe, test, expect} from "vitest";
import {add, createCards} from "../src/tdd.js";


describe("add", ()=>{
    test.each([
        {a : 4, b : 5, res : 9},
        {a : 1, b : 8, res : 9},
        {a : 10, b : 10, res : 20}
    ])("returns addition of $a + $b => $res", ({a, b,res})=>{
        expect(add(a,b)).toBe(res)
    })

    test.each([
        {a : 5, b : "5", err : "number must be a integer"},
        {a : 12, b : '12', err : "number must be a integer"},
        {a : "2", b : 5, err : "number must be a integer"}
    ])("returns error for invalid data types",({a,b,err})=>{
        expect(() => add(a,b)).toThrow(err);
    } )
})

describe("createCards", ()=>{
    const suits = ["HEART", "DIAMOND", "CLUBS", "SPADES" ];
    const  values = ["Ace","2","3","4","5","6","7","8","9","10","JACK", "QUEEN", "KING"]

    test("returns an array", ()=>{
        expect(typeof createCards(suits, values)).toBeTruthy();
    })


    test("checking the length of the cards that have count of 52", ()=>{
        const cards = createCards(suits, values)

        expect(cards).toHaveLength(52);
    })
})
