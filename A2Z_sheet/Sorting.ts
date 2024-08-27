export namespace Sorting {

    /**
     * Swaps two elements in an array.
     * 
     * @param arr The array where elements are to be swapped.
     * @param i The index of the first element.
     * @param j The index of the second element.
     */
    export function swap(arr: number[], i: number, j: number): void {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    /**
     * Sorts an array using the selection sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @returns The sorted array.
     */
    export function selectionSort(arr: number[]): number[] {
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            swap(arr, i, min);
        }
        return arr;
    }

    /**
     * Sorts an array using the bubble sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @returns The sorted array.
     */
    export function bubbleSort(arr: number[]): number[] {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                }
            }
        }
        return arr;
    }

    /**
     * Sorts an array using the insertion sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @returns The sorted array.
     */
    export function insertionSort(arr: number[]): number[] {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i; j > 0; j--) {
                if (arr[j - 1] > arr[j]) {
                    swap(arr, j - 1, j);
                }
            }
        }
        return arr;
    }

    /**
     * Sorts an array recursively using the bubble sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @param n The last index to be considered in the array.
     * @returns The sorted array.
     */
    export function recursiveBubbleSort(arr: number[], n: number): number[] {
        if (n == 0) return arr;
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        return recursiveBubbleSort(arr, n - 1);
    }

    /**
     * Sorts an array recursively using the insertion sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @param i The current index being sorted.
     * @returns The sorted array.
     */
    export function recursiveInsertionSort(arr: number[], i: number = 1): number[] {
        if (i == arr.length) return arr;
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
        return recursiveInsertionSort(arr, i + 1);
    }

    /**
     * Merges two halves of an array sorted in place.
     * 
     * @param arr The array containing the two halves.
     * @param low The starting index of the first half.
     * @param mid The ending index of the first half.
     * @param high The ending index of the second half.
     */
    function merge(arr: number[], low: number, mid: number, high: number): void {
        let newArr: number[] = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                newArr.push(arr[left++]);
            } else {
                newArr.push(arr[right++]);
            }
        }

        while (left <= mid) {
            newArr.push(arr[left++]);
        }
        while (right <= high) {
            newArr.push(arr[right++]);
        }

        for (let i = 0; i < newArr.length; i++) {
            arr[low + i] = newArr[i];
        }
    }

    /**
     * Sorts an array using the merge sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @param low The starting index of the array to be sorted.
     * @param high The ending index of the array to be sorted.
     */
    export function mergeSort(arr: number[], low: number, high: number): void {
        if (low < high) {
            const mid = Math.floor((low + high) / 2);
            mergeSort(arr, low, mid);
            mergeSort(arr, mid + 1, high);
            merge(arr, low, mid, high);
        }
    }

    /**
     * Partitions the array for the quick sort algorithm.
     * 
     * @param arr The array to be partitioned.
     * @param low The starting index of the partition.
     * @param high The ending index of the partition.
     * @returns The index of the pivot element.
     */
    function partition(arr: number[], low: number, high: number): number {
        let pivot = arr[low];
        let i = low;
        let j = high;

        while (i < j) {
            while (i <= high - 1 && arr[i] <= pivot) i++;
            while (j >= low + 1 && arr[j] > pivot) j--;
            if (i < j) swap(arr, i, j);
        }
        swap(arr, low, j);
        return j;
    }

    /**
     * Sorts an array using the quick sort algorithm.
     * 
     * @param arr The array to be sorted.
     * @param low The starting index of the array to be sorted.
     * @param high The ending index of the array to be sorted.
     */
    export function quickSort(arr: number[], low: number, high: number): void {
        if (low < high) {
            let pIndex = partition(arr, low, high);
            quickSort(arr, low, pIndex - 1);
            quickSort(arr, pIndex + 1, high);
        }
    }
}
