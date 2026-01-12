export const shippingCost = (weight, coupon = "") =>{
    if (!typeof weight === "number") throw new Error("Weight must be a number");
    if (!typeof coupon === "string") throw new Error("Coupen must be a string.");

    if (weight <= 0) throw new Error("Weight must be greater than 0.");

    if (coupon === 'freeshipping') return 0;

    if (weight <= 1) return 3.99;
    if (weight <= 5) return 5.99;
    if (weight <= 20) return 8.99;

    return 14.99;
}