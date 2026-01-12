// Test Driven Development

// Start with tests, and outline how a function should behave

// --> Document what is expected of a function without worrying how
// --> Think carefully about the function's design
// --> Helps you to write more modular code, easier to maintain

export const add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") throw new Error("number must be a integer");
    return a + b;
}

export const createCards = (suits, values) => {


    const cards = []

    for (let suit of suits) {
        for (let value of values) {
            cards.push(`${suit} ${value}`)
        }
    }

    return cards;


}
