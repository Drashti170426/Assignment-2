
// 1. Function that accepts text with parameters and prints a custom message
export function greetStudent(firstName, lastName, class1) {
    console.log(`Hello, ${firstName} ${lastName}! Welcome to ${class1}. We're glad to have you in the class!`);
}

//2. Function for unit conversion: Kilometers to Miles
export function convertKmToMiles(kilometers) {
    const miles = kilometers * 0.62; 
    return miles;
}

//3. Function for mathematical operation: Calculate square of a number
export function calculateSquare(number) {
    return number * number;
}

// 4. Check prime numbers up to a given number
export function checkPrimeNumbers(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }
    return primes;
}


