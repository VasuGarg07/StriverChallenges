class BasicMaths {

    /** Count Number of Digits
     * @param {number} n 
     * @returns {number} 
     * 
     * Brute Force Approach
     */
    countDigits(n) {
        n = Math.abs(n)
        let count = 1;
        while (n > 10) {
            n /= 10;
            count++
        }
        return count;
    }

    /**
     * Count Number of Digits optimized
     */
    optimizedCountDigits(n) {
        // handle negative numbers
        n = Math.abs(n);
        // logarithmic base 10 of a positive integers gives the number of digits in n
        // add 1 to the result to ensure that the count is correct even for numbers that are powers of 10.
        return Math.floor(Math.log10(n) + 1);
    }

    // Reverse Digits of A Number
    reverseNumber(n) {
        let res = 0;
        const isNegative = n < 0;
        n = Math.abs(n);
        while (n > 0) {
            let lastDigit = n % 10;
            res = (res * 10) + lastDigit;
            n = Math.floor(n / 10);
        }
        return isNegative ? res * -1 : res;
    }

    // Check Palindrome Number: for positive integers
    isNumberPalindrome(n) {
        return n == this.reverseNumber(n)
    }

    // GCD
    gcd(a, b) {
        let min = Math.min(a, b);
        while (min) {
            if (!(a % min) && !(b % min)) {
                return min;
            }
            min--;
        }
    }

    // Optimized GCD - Euclidean Algorithm
    /**
     * The Euclidean Algorithm is a method for finding the GCD of two numbers. 
     * It operates on the principle that the GCD of two numbers remains the same 
     * even if the smaller number is subtracted from the larger number.
     */
    optimizedGcd(a, b) {
        if (b === 0) return a;
        return this.optimizedGcd(b, a % b)
    }

    /**
     * Check if a number is Armstrong Number
     * An Amrstrong number is a number that is equal to '
     * the sum of its own digits each raised to the power of the number of digits.
     */
    isArmstrong(num) {
        let org = num;
        let res = 0;
        const digits = [];
        while (num > 0) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        digits.forEach(d => res += (d ** digits.length));
        return res === org;
    }

    /**
     * Print All Divisors
     * @param {number} num 
     * @returns {number[]}
     * tip - if k is divisor of num then so is num/k
     * this property is symmetric about sqrt(num) i.e. sqrt(num) == num / sqrt(num);
     * hench iterate through sqrt(num) instead of num and for every num % i == 0; add i & num/i
     */
    allDivisors(num) {
        let res = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (!(num % i)) {
                res.push(i);
                if (i !== num / i) {
                    res.push(num / i);
                }
            }
        }
        return res;
    }

    // Check if a number is prime number
    isPrimeNumber(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (!(num % i)) {
                return false;
            }
        }
        return true
    }

}

const mathHelper = new BasicMaths();

const ans = mathHelper.isPrimeNumber(4);
console.log(ans)