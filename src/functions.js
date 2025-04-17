//1. Colour Mix
export function colour_mix(rgb_colour1, rgb_colour2) {
    const validColours = ["red", "blue", "green"];
    if (!validColours.includes(rgb_colour1) || !validColours.includes(rgb_colour2)) return "Error";

    if (rgb_colour1 === rgb_colour2) return rgb_colour1;

    const mix = new Set([rgb_colour1, rgb_colour2]);

    if (mix.has("red") && mix.has("blue")) return "purple";
    if (mix.has("red") && mix.has("green")) return "olive";
    if (mix.has("blue") && mix.has("green")) return "turqoise";
    return "Error";
}

//2. Largest Product
export function largest_product(val1, val2, val3) {
    const values = [val1, val2, val3].sort((a, b) => b - a);
    return values[0] * values[1]
}

//3. Day of the Week
export function day_of_the_week(day_num) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (day_num < 1 || day_num > 7) return "Error";
    return days[day_num - 1];
}

//4. Pay Raise
export function pay_raise(status, years, salary) {
    if (status === "F") {
        if (years >= 10) return salary * 1.05;
        if (years < 4) return salary * 1.015;
    } else if (status === "P") {
        if (years > 10) return salary * 1.03;
        if (years < 4) return salary * 1.01;
    }
    return salary * 1.02;
}

//5. Leap Year
export function is_leap(year) {
    if (year % 4 !== 0) return false;
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
}