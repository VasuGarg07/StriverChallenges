import { Utils } from "./Utils";

namespace ArrayEasy {

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
     * Rotates an array to the right by 'k' positions using the reversal algorithm.
     * @param arr - The array to rotate.
     * @param k - The number of positions to rotate the array.
     * @returns The rotated array.
     */
    export function rightRotateByK(arr: number[], k: number): number[] {
        Utils.reversal(arr, 0, arr.length - 1 - k);
        Utils.reversal(arr, arr.length - k, arr.length - 1);
        Utils.reversal(arr, 0, arr.length - 1);
        return arr;
    }

    /**
     * Rotates an array to the left by 'k' positions using the reversal algorithm.
     * @param arr - The array to rotate.
     * @param k - The number of positions to rotate the array.
     */
    export function leftRotateByK(arr: number[], k: number): void {
        Utils.reversal(arr, 0, k - 1);
        Utils.reversal(arr, k, arr.length - 1);
        Utils.reversal(arr, 0, arr.length - 1);
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
                Utils.arraySwap(arr, i, j);
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

    // For all integers
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

namespace ArrayMedium {
    /**
     * Function to check if there exists a pair of numbers in the array that sums to a target value.
     * @param {number[]} arr - Array of integers.
     * @param {number} target - Target sum value.
     * @returns {string} - Returns 'YES' with the indices if a pair is found, otherwise returns 'NO'.
     */
    export function twoSum(arr: number[], target: number): string {
        let map: Map<number, number> = new Map();

        for (let i = 0; i < arr.length; i++) {
            let idx = map.get(target - arr[i]);
            if (idx) {
                return `YES || ${i}, ${idx}`;
            } else {
                map.set(arr[i], i);
            }
        }
        return 'NO || -1, -1';
    }

    /**
     * Function to sort an array of 0s, 1s, and 2s in place.
     * Uses the Dutch National Flag algorithm.
     * @param {number[]} arr - Array of integers (0s, 1s, and 2s).
     */
    export function sort012ArrayInPlace(arr: number[]): void {
        let low = 0;
        let mid = 0;
        let high = arr.length - 1;

        while (mid <= high) {
            switch (arr[mid]) {
                case 0:
                    Utils.arraySwap(arr, low, mid);
                    low++;
                    mid++;
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    Utils.arraySwap(arr, mid, high);
                    high--;
                    break;
                default:
                    break;
            }
        }

    }

    /**
     * Function to find the majority element in an array.
     * A majority element is one that occurs more than half the time.
     * @param {number[]} arr - Array of integers.
     * @returns {number} - The majority element.
     */
    export function findMajorityElement(arr: number[]): number {
        let count = 0;
        let element!: number;

        for (let i = 0; i < arr.length; i++) {
            if (count == 0) {
                element = arr[i];
            } else if (element == arr[i]) {
                count++;
            } else {
                count--;
            }
        }
        console.log(count)
        return element;
    }

    /**
     * Function to find the maximum subarray sum using a brute force approach.
     * @param {number[]} arr - Array of integers.
     * @returns {number} - Maximum sum of a contiguous subarray.
     */
    export function maxSubArraySum(arr: number[]): number {
        let maxSum = 0;

        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];
                maxSum = Math.max(sum, maxSum);
            }
        }
        return maxSum;
    }

    /**
     * Optimized version of finding the maximum subarray sum using Kadane's algorithm.
     * @param {number[]} arr - Array of integers.
     * @returns {number[]} - Indices of the subarray with the maximum sum.
     */
    export function optimizedMaxSubArray(arr: number[]): number[] {
        let maxSum = -Infinity;
        let indices = [0, 0];
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];

            if (sum > maxSum) {
                maxSum = sum;
                indices[1] = i;
            }

            if (sum < 0) {
                sum = 0;
                indices[i + 1]
            }
        }

        // empty arrray case
        if (maxSum < 0) {
            maxSum = -1;
        }
        return indices;
    }

    /**
     * Function to calculate the maximum profit from buying and selling stocks.
     * You can only buy and sell once.
     * @param {number[]} arr - Array of stock prices.
     * @returns {number} - Maximum profit.
     */
    export function stockBuySell(arr: number[]): number {
        let buy = arr[0];
        let profit = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < buy) {
                buy = arr[i];
            } else if (arr[i] - buy > profit) {
                profit = arr[i] - buy;
            }
        }

        return profit;
    }

    /**
     * Function to rearrange an array such that positive and negative numbers alternate.
     * Assumes an equal number of positive and negative numbers.
     * @param {number[]} arr - Array of integers with equal positives and negatives.
     */
    export function rearrangeBySign(arr: number[]): void {
        let positives: number[] = Array(arr.length / 2);
        let negatives: number[] = Array(arr.length / 2);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positives.push(arr[i])
            } else {
                negatives.push(arr[i]);
            }
        }

        let pos = 0, neg = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0 && pos < positives.length) {
                arr[i] = positives[pos++];
            } else if (neg < negatives.length) {
                arr[i] = negatives[neg++];
            }
        }
    }

    /**
     * Function to generate the next lexicographical permutation of an array.
     * @param {number[]} arr - Array of integers.
     */
    export function nextPermutation(arr: number[]): void {

        // find break point
        let breakPoint = -1;
        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                breakPoint = i;
                break;
            }
        }

        // if break point does not exist -> array sorted in descending order
        if (breakPoint < 0) {
            arr.reverse();
        }

        // swap break point with next greatest element
        for (let i = arr.length - 1; i >= breakPoint + 1; i--) {
            if (arr[i] > arr[breakPoint]) {
                Utils.arraySwap(arr, i, breakPoint);
                break;
            }
        }

        // reverse the second half of array
        Utils.reversal(arr, breakPoint + 1, arr.length - 1)
    }

    /**
     * Function to find all leader elements in an array.
     * A leader is an element greater than all elements to its right.
     * @param {number[]} arr - Array of integers.
     * @returns {number[]} - Array of leader elements.
     */
    export function findAllLeaders(arr: number[]): number[] {
        if (arr.length == 1) return arr;

        let currentLeader = arr.length - 1;
        let ans: number[] = [arr[currentLeader]];

        for (let i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > arr[currentLeader]) {
                currentLeader = i;
                ans.push(arr[i]);
            }
        }

        return ans.reverse();
    }

    /**
     * Function to find the longest consecutive sequence of integers in an array.
     * @param {number[]} arr - Array of integers.
     * @returns {number} - Length of the longest consecutive sequence.
     */
    export function longestConsecutiveSequence(arr: number[]): number {
        let longest = 1;
        let count = 0;
        let set: Set<number> = new Set(arr);

        set.forEach(el => {
            let num = el;
            // Starting point
            if (!set.has(num - 1)) {
                count = 1;
                // find sequence length
                while (set.has(num + 1)) {
                    count++;
                    num++;
                }

                // update max Count
                if (count > longest) {
                    longest = count;
                }
            }
        })

        return longest
    }

    /**
     * Function to set entire rows and columns to zero in a matrix if an element is zero.
     * @param {number[][]} arr - 2D array (matrix) of integers.
     */
    export function setMatrixZero(arr: number[][]): void {
        let rows: number[] = Array(arr.length).fill(0);
        let columns: number[] = Array(arr[0].length).fill(0);

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (!arr[i][j]) {
                    rows[i] = 1;
                    columns[j] = 1;
                }
            }
        }

        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (rows[i] || columns[j]) {
                    arr[i][j] = 0;
                }
            }
        }
    }

    /**
     * Function to rotate a matrix by 90 degrees in place.
     * @param {number[][]} arr - 2D array (matrix) of integers.
     */
    export function rotateMatrixBy90(arr: number[][]) {
        let len = arr.length;
        /**
         * 1. one way is to create a new array `result` and while traversing do :- result[i][j] = arr[len - 1 - i][j]
         * 2. second method : use transpose followed by horizontal reversal
         */

        // matrix transpose
        for (let i = 0; i < len; i++) {
            for (let j = i; j < len; j++) {
                let temp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = temp;
            }
        }

        // Reverse each row
        arr.map(row => row.reverse())
    }

    /**
     * Function to traverse a matrix in spiral order and return the traversal as a string.
     * @param {number[][]} arr - 2D array (matrix) of integers.
     * @returns {string} - A string representation of the spiral traversal.
     */
    export function matrixSpiralTraversal(arr: number[][]): string {
        let [left, right, top, bottom] = [0, arr[0].length - 1, 0, arr.length - 1];
        let answer: string = '';

        while (left <= right && top <= bottom) {
            // left -> right
            for (let i = left; i <= right; i++) {
                answer += arr[top][i] + ' ';
            }
            top++;

            // top -> bottom
            for (let i = top; i <= bottom; i++) {
                answer += arr[i][right] + ' ';
            }
            right--;

            // right -> left
            if (top <= bottom) {
                for (let i = right; i >= left; i--) {
                    answer += arr[bottom][i] + ' ';
                }
                bottom--;
            }

            // bottom -> up
            if (left <= right) {
                for (let i = bottom; i >= top; i--) {
                    answer += arr[i][left] + ' ';
                }
                left++;
            }

        }
        return answer;
    }

    /**
     * Function to count the number of subarrays that sum up to a given value `k`.
     * @param {number[]} arr - Array of integers.
     * @param {number} k - Target sum.
     * @returns {number} - Number of subarrays with sum equal to `k`.
     */
    export function totalSubarraySumK(arr: number[], k: number): number {
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            let sum = 0;

            for (let j = i; j < arr.length; j++) {
                sum += arr[j];

                if (sum == k) {
                    count++;
                }
            }
        }

        return count;
    }
}

namespace ArrayHard {
    /**
     * Builds Pascal's Triangle and solves three variations:
     * 1. Given a row and column, returns the element at that position.
     * 2. Given a row number, returns the entire row of Pascal's Triangle.
     * 3. Given a number n, prints the first n rows of Pascal's Triangle.
     * 
     * @param {number} row - The number of rows to generate.
     * @param {number} column - The column index for variation 1.
     */
    export function pascalTriange(row: number, column: number) {
        let triangle: number[][] = [];

        for (let i = 0; i < row; i++) {
            let curr: number[] = Array(i + 1).fill(1);
            let prev = triangle[i - 1];

            if (prev) {
                for (let j = 1; j < i; j++) {
                    curr[j] = prev[j - 1] + prev[j];
                }
            }
            triangle.push(curr);
        }

        console.log(triangle[row - 1][column - 1]);  // Variation 1
        console.log(triangle[row - 1]);              // Variation 2
        Utils.printMatrix(triangle);                 // Variation 3
    }

    /**
     * Finds all elements in the array that appear more than n/3 times.
     * 
     * @param {number[]} arr - The input array.
     * @returns {number[]} - An array of elements appearing more than n/3 times.
     */
    export function majorityElementN3(arr: number[]): number[] {
        let ans: number[] = [];
        let map: { [key: number]: number } = {};

        for (let num of arr) {
            map[num] = (map[num] || 0) + 1;
        }

        for (let key in map) {
            if (map[key] >= Math.floor(arr.length / 3)) {
                ans.push(+key);
            }
        }

        return ans;
    }

    /**
     * Finds all unique triplets in the array which sum to zero.
     * 
     * @param {number[]} arr - The input array.
     * @returns {number[][]} - An array of triplets that sum to zero.
     */
    export function threeSum(arr: number[]): number[][] {
        let sorted = arr.sort((a, b) => a - b);
        let ans: number[][] = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (i && arr[i] == arr[i - 1]) continue;

            let j = i + 1;
            let k = arr.length - 1;

            while (j < k) {
                let sum = arr[i] + arr[j] + arr[k];

                if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    ans.push([arr[i], arr[j], arr[k]]);
                    do { j++; } while (j < k && arr[j] == arr[j - 1]);
                    do { k--; } while (j < k && arr[k] == arr[j + 1]);
                }
            }
        }

        return ans;
    }

    /**
     * Finds the length of the longest subarray with zero sum.
     * 
     * @param {number[]} arr - The input array.
     * @returns {number} - Length of the longest subarray with zero sum.
     */
    export function longestSubarrayZeroSum(arr: number[]): number {
        let max = 0;
        let sum = 0;
        let map: Map<number, number> = new Map();

        for (let i = 0; i < arr.length - 1; i++) {
            sum += arr[i];

            if (!sum) {
                max = i + 1;
            } else {
                if (map.has(sum)) {
                    max = Math.max(max, i - map.get(sum)!);
                } else {
                    map.set(sum, i);
                }
            }
        }

        return max;
    }

    /**
     * Counts the number of subarrays with XOR equal to k.
     * 
     * @param {number[]} arr - The input array.
     * @param {number} k - The target XOR value.
     * @returns {number} - The count of subarrays with XOR equal to k.
     */
    export function countSubarrayXorK(arr: number[], k: number): number {
        let count = 0;
        let xr = 0;
        let map: Map<number, number> = new Map();
        map.set(xr, 1);

        for (let i = 0; i < arr.length; i++) {
            xr = xr ^ arr[i];
            const x = xr ^ k;
            count += map.get(x) || 0;
            map.set(xr, (map.get(xr) || 0) + 1);
        }

        return count;
    }

    /**
     * Merges overlapping intervals.
     * 
     * @param {number[][]} intervals - An array of intervals.
     * @returns {number[][]} - An array of merged intervals.
     */
    export function overlappingIntervals(intervals: number[][]): number[][] {
        intervals = intervals.sort((a, b) => a[0] - b[0]);
        const answer: number[][] = [intervals[0]];

        for (let i = 1; i < intervals.length; i++) {
            const last = answer[answer.length - 1];
            const curr = intervals[i];

            if (last[1] >= curr[0]) {
                last[1] = Math.max(last[1], curr[1]);
            } else {
                answer.push(curr);
            }
        }

        return answer;
    }

    /**
     * Merges two sorted arrays without using extra space.
     * 
     * @param {number[]} arr1 - The first sorted array.
     * @param {number[]} arr2 - The second sorted array.
     */
    export function mergeArraysWithoutExtraSpace(arr1: number[], arr2: number[]) {
        let left = arr1.length - 1;
        let right = 0;

        while (left >= 0 && right < arr2.length) {
            if (arr1[left] > arr2[right]) {
                [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
                left--, right++;
            } else {
                break;
            }
        }

        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => a - b);
    }

    /**
     * Finds the missing and repeating numbers in an array where each number is in the range [1, n].
     * 
     * @param {number[]} arr - The input array.
     */
    export function findMissingAndRepeating(arr: number[]) {
        let repeating: number = 0;
        let missing: number = 0;
        let set: Set<number> = new Set();
        let sum = 0;
        let apsum = arr.length * (arr.length + 1) / 2;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (set.has(arr[i])) {
                repeating = arr[i];
            } else {
                set.add(arr[i]);
            }
        }

        missing = apsum - sum + repeating;
        console.log('Missing: ', missing, ' Repeating: ', repeating);
    }
}


const arr = [3, 1, 2, 5, 3];
ArrayHard.findMissingAndRepeating(arr);
