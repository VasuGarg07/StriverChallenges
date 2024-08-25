export namespace BasicMaths {

    /**
     * Counts the number of digits in a given number using a brute force approach.
     * 
     * @param n The number whose digits are to be counted.
     * @returns The number of digits in the input number.
     */
    export function countDigits(n: number): number {
        n = Math.abs(n);
        let count = 1;
        while (n >= 10) {
            n /= 10;
            count++;
        }
        return count;
    }

    /**
     * Counts the number of digits in a number using a logarithmic approach for optimization.
     * 
     * @param n The number whose digits are to be counted.
     * @returns The number of digits in the input number.
     */
    export function optimizedCountDigits(n: number): number {
        n = Math.abs(n);
        if (n === 0) return 1; // log10(0) is undefined, so we handle this edge case separately
        return Math.floor(Math.log10(n) + 1);
    }

    /**
     * Reverses the digits of a given number.
     * 
     * @param n The number to be reversed.
     * @returns The number with its digits in reverse order.
     */
    export function reverseNumber(n: number): number {
        let result = 0;
        const isNegative = n < 0;
        n = Math.abs(n);
        while (n > 0) {
            let lastDigit = n % 10;
            result = (result * 10) + lastDigit;
            n = Math.floor(n / 10);
        }
        return isNegative ? -result : result;
    }

    /**
     * Checks if a number is a palindrome.
     * 
     * @param n The number to check.
     * @returns True if the number is a palindrome, otherwise false.
     */
    export function isNumberPalindrome(n: number): boolean {
        return n === reverseNumber(n);
    }

    /**
     * Calculates the greatest common divisor (GCD) of two numbers using a decremental method.
     * 
     * @param a The first number.
     * @param b The second number.
     * @returns The GCD of the two numbers.
     */
    export function gcd(a: number, b: number): number {
        let min = Math.min(a, b);
        while (min > 0) {
            if (a % min === 0 && b % min === 0) {
                return min;
            }
            min--;
        }
        return 1;
    }

    /**
     * Optimized method to find the greatest common divisor (GCD) using the Euclidean algorithm.
     * 
     * @param a The first number.
     * @param b The second number.
     * @returns The GCD of the two numbers.
     */
    export function optimizedGcd(a: number, b: number): number {
        if (b === 0) return a;
        return optimizedGcd(b, a % b);
    }

    /**
     * Checks if a number is an Armstrong number.
     * An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
     * 
     * @param num The number to check.
     * @returns True if the number is an Armstrong number, otherwise false.
     */
    export function isArmstrong(num: number): boolean {
        let original = num;
        let result = 0;
        const digits: number[] = [];
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        digits.forEach(d => result += Math.pow(d, digits.length));
        return result === original;
    }

    /**
     * Finds all divisors of a given number.
     * 
     * @param num The number whose divisors are to be found.
     * @returns An array containing all divisors of the number.
     */
    export function allDivisors(num: number): number[] {
        let result: number[] = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                result.push(i);
                if (i !== num / i) {
                    result.push(num / i);
                }
            }
        }
        return result;
    }

    /**
     * Checks if a number is a prime number.
     * 
     * @param num The number to check.
     * @returns True if the number is prime, otherwise false.
     */
    export function isPrimeNumber(num: number): boolean {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
