class Recursion {
    // Sum of first positive N Numbers
    sumOfN(n) {
        if (n == 0) return n;
        return n + this.sumOfN(n - 1)
    }

    // Factorial of first positive N Numbers
    factorial(n) {
        if (n == 1) return 1;
        return n * this.factorial(n - 1)
    }

    // Reverse Array
    reverseArray(arr, start, end) {
        if (start, end) return arr;
        [arr[start], arr[end]] = [arr[end], arr[start]];
        return this.reverseArray(arr, ++start, --end);
    }

    // check string palindrome
    isPalindrome(str, i) {
        if (i >= str.length / 2) { return true; }
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        return this.isPalindrome(str, ++i);
    }
}

const recursionHelper = new Recursion();

