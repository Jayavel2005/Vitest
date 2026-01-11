export const isPrime = (num) =>{
    if (typeof num !== "number") throw new Error("Input must be a number");
    if (!Number.isInteger(num)) return false;
    if (num <= 1) return false;
    for (let i = 2;i<=Math.sqrt(num);i++){
        if (num % i === 0) return  false;
    }
    return  true
}