namespace ArrayHelper {

    /**
     * Swaps two elements in an array.
     * @param arr - The array containing the elements to swap.
     * @param i - The index of the first element to swap.
     * @param j - The index of the second element to swap.
     * @returns The array with the swapped elements.
     */
    export function swap(arr: number[], i: number, j: number): number[] {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }

    /**
     * Finds the largest element in an array.
     * @param arr - The array to search.
     * @returns The largest element.
     */
    export function findLargest(arr: number[]): number {
        let max = arr[0];

        arr.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        return max;
    }

    /**
     * Finds the second smallest element in an array.
     * @param arr - The array to search.
     * @returns The second smallest element or -1 if the array has less than two elements.
     */
    export function secondMin(arr: number[]): number {
        if (arr.length < 2) return -1;
        let min = Infinity;
        let secMin = Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                secMin = min;
                min = arr[i];
            } else if (arr[i] < secMin && arr[i] !== min) {
                secMin = arr[i];
            }
        }
        return secMin;
    }

    /**
     * Checks if an array is sorted in ascending order.
     * @param arr - The array to check.
     * @returns True if the array is sorted, false otherwise.
     */
    export function isSorted(arr: number[]): boolean {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    /**
     * Removes duplicate elements from an array using a Set.
     * @param arr - The array from which to remove duplicates.
     * @returns The new length of the array after removing duplicates.
     */
    export function removeDuplicates(arr: number[]): number {
        let set = new Set(arr);
        let uniqueArr = Array.from(set);
        for (let i = 0; i < uniqueArr.length; i++) {
            arr[i] = uniqueArr[i];
        }
        return uniqueArr.length;
    }

    /**
     * Removes duplicates from an array without using extra space for small ranges.
     * @param arr - The array from which to remove duplicates.
     * @returns The new length of the array after removing duplicates.
     */
    export function optimizedRemoveDuplicates(arr: number[]): number {
        if (arr.length < 2) return arr.length;
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                ++i;
                arr[i] = arr[j];
            }
        }
        return ++i;
    }

    /**
     * Performs a left shift by one position on the array.
     * @param arr - The array to shift.
     * @returns The shifted array.
     */
    export function leftShiftBy1(arr: number[]): number[] {
        if (arr.length < 2) return arr;

        let first = arr[0];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr[arr.length - 1] = first;
        return arr;
    }

    /**
     * Reverses a section of an array from 'left' to 'right'.
     * @param arr - The array to reverse.
     * @param left - The starting index of the section to reverse.
     * @param right - The ending index of the section to reverse.
     */
    export function reversal(arr: number[], left: number, right: number): void {
        while (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    /**
     * Rotates an array to the right by 'k' positions using the reversal algorithm.
     * @param arr - The array to rotate.
     * @param k - The number of positions to rotate the array.
     * @returns The rotated array.
     */
    export function rightRotateByK(arr: number[], k: number): number[] {
        reversal(arr, 0, arr.length - 1 - k);
        reversal(arr, arr.length - k, arr.length - 1);
        reversal(arr, 0, arr.length - 1);
        return arr;
    }

    /**
     * Rotates an array to the left by 'k' positions using the reversal algorithm.
     * @param arr - The array to rotate.
     * @param k - The number of positions to rotate the array.
     */
    export function leftRotateByK(arr: number[], k: number): void {
        reversal(arr, 0, k - 1);
        reversal(arr, k, arr.length - 1);
        reversal(arr, 0, arr.length - 1);
    }

    /**
     * Moves all zero elements to the end of the array.
     * @param arr - The array to modify.
     */
    export function pushZeroesToEnd(arr: number[]): void {
        if (arr.length < 2) return;

        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i - count] = arr[i];
            } else {
                count += 1;
            }
        }

        for (let i = arr.length - count; i < arr.length; i++) {
            arr[i] = 0;
        }
    }

    /**
     * Optimizes the movement of zeros to the end of the array using two pointers.
     * @param arr - The array to modify.
     */
    export function optimizedPushZeroesToEnd(arr: number[]): void {
        let j = arr.indexOf(0);
        if (j === -1) return;

        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i]) {
                swap(arr, i, j);
                j++;
            }
        }
    }

    /**
     * Merges two sorted arrays into a single sorted array without duplicates.
     * This function assumes that both input arrays are sorted in ascending order.
     *
     * @param {number[]} arr1 - The first sorted array.
     * @param {number[]} arr2 - The second sorted array.
     * @returns {number[]} - A new sorted array that is the union of the two input arrays.
     *
     */
    export function sortedArrayUnion(arr1: number[], arr2: number[]): number[] {
        let union: number[] = [];
        let i = 0;
        let j = 0;

        function pushInArr(num: number) {
            if (union[union.length - 1] !== num) {
                union.push(num);
            }
        }

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] == arr2[j]) {
                pushInArr(arr1[i]);
                i++;
                j++;
            } else if (arr1[i] < arr2[j]) {
                pushInArr(arr1[i]);
                i++;
            } else {
                pushInArr(arr2[j]);
                j++;
            }
        }

        while (i < arr1.length) {
            pushInArr(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            pushInArr(arr2[j]);
            j++
        }

        return union;
    }

    /**
     * Searches for the missing number in an unsorted array of unique integers
     * @param {number[]} arr - The array of numbers which is partially sorted and may miss one integer.
     * @param {number} length - The length of the array.
     * @returns {number} The missing integer in the range if found; otherwise, returns -1.
     */
    export function findMissingNumber(arr: number[], length: number): number {
        const sumOfArray = arr.reduce((a, b) => a + b, 0);
        const totalSum = (length * (length + 1)) / 2;
        return totalSum - sumOfArray
    }

    /**
     * Calculates the maximum number of consecutive 1's in the provided array of numbers.
     * The function iterates through the array, counting the consecutive 1's and resetting the count when encountering a 0.
     * This method ensures the efficient identification of the longest sequence of 1's.
     *
     * @param {number[]} arr - The array of numbers to analyze.
     * @returns {number} The length of the longest sequence of consecutive 1's in the array.
     */
    export function maxConsective1s(arr: number[]): number {
        let maxCount = 0;
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                count += 1;
                maxCount = Math.max(count, maxCount);
            } else {
                count = 0;
            }
        }

        return maxCount;
    }

    /**
     * Finds the first number in the array that appears only once.
     * Use map to track frequency of each number.
     * Loop through numbers in map to find number with frequecy 1.
     * If no such number exists, it returns Infinity.
     *
     * @param {number[]} arr - The array of numbers to analyze.
     * @returns {number} The first number with one occurrence or Infinity if none exists.
     */
    export function frequency1number(arr: number[]): number {
        let map: { [k: number]: number } = {};

        for (let i = 0; i < arr.length; i++) {
            map[arr[i]] = (map[arr[i]] || 0) + 1;
        }

        for (let key in map) {
            if (map[key] == 1) return +key;
        }

        return Infinity
    }

    /**
     * Finds the first number in the array that appears only once.
     * If no such number exists, it returns Infinity.
     * Property 1 | XOR of two same numbers is always 0 i.e. a ^ a = 0.
     * Property 2 | XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.
     * @param {number[]} arr - The array of numbers to analyze.
     * @returns {number} The first number with one occurrence or Infinity if none exists.
     */
    export function optimizedFrequency1Number(arr: number[]): number {
        let xor = 0
        for (let i = 0; i < arr.length; i++) {
            xor = xor ^ arr[i];
        }
        return xor;
    }

    /**
     * Finds the length of the longest contiguous subarray within an array whose sum equals a given target, k.
     * The function uses a sliding window approach, adjusting the window with two pointers to maintain or
     * reduce the cumulative sum. This method ensures an efficient search by expanding the window until the sum
     * exceeds k, then contracting it from the left to potentially match k again.
     *
     * @param {number[]} arr - The array of numbers to analyze.
     * @param {number} k - The target sum to match.
     * @returns {number} The length of the longest subarray whose sum equals k.
     */
    export function longestSubarrayOfSumK(arr: number[], k: number): number {
        let left = 0, right = 0; // 2 pointers
        let sum = arr[0];
        let maxLen = 0;
        while (right < arr.length) {
            // if sum > k, reduce the subarray from left
            // until sum becomes less or equal to k
            while (left <= right && sum > k) {
                sum -= arr[left];
                left++;
            }
            // if sum = k, update the maxLen i.e. answer
            if (sum === k) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
            // Move forward the right pointer
            right++;
            if (right < arr.length) {
                sum += arr[right];
            }
        }

        return maxLen;
    }

    export function longestSubarrayOfSumK2(arr: number[], k: number): number {
        let maxLen = 0;

        for (let i = 0; i < arr.length; i++) {
            let sum = 0;

            for (let j = i; j < arr.length; j++) {
                sum += arr[j];

                if (sum == k) {
                    maxLen = Math.max(maxLen, j - i + 1);
                }
            }
        }
        return maxLen;
    }

}

const arr = [-1, 1, 1];
const k = 1

console.log(ArrayHelper.longestSubarrayOfSumK2(arr, k));
