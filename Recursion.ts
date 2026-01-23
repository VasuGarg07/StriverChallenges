export namespace Recursion {

    /**
     * Calculates the sum of the first N positive numbers recursively.
     * 
     * @param n The upper limit of the number sequence.
     * @returns The sum of numbers from 1 to n.
     */
    export function sumOfN(n: number): number {
        if (n === 0) return 0;
        return n + sumOfN(n - 1);
    }

    /**
     * Computes the factorial of a given number recursively.
     * 
     * @param n The number to compute the factorial for.
     * @returns The factorial of n.
     */
    export function factorial(n: number): number {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    /**
     * Reverses an array in place using recursion.
     * 
     * @param arr The array to be reversed.
     * @param start The starting index for the reversal.
     * @param end The ending index for the reversal.
     * @returns The reversed array.
     */
    export function reverseArray(arr: any[], start: number, end: number): any[] {
        if (start >= end) return arr;
        [arr[start], arr[end]] = [arr[end], arr[start]];
        return reverseArray(arr, start + 1, end - 1);
    }

    /**
     * Checks if a string is a palindrome using recursion.
     * 
     * @param str The string to check.
     * @param i The current index in the string to check.
     * @returns True if the string is a palindrome, false otherwise.
     */
    export function isPalindrome(str: string, i: number = 0): boolean {
        if (i >= str.length / 2) return true;
        if (str[i] !== str[str.length - 1 - i]) return false;
        return isPalindrome(str, i + 1);
    }
}
