import { Utils } from "./Utils";

namespace BinarySearch {
    export function iterativeBS(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);
            if (arr[mid] == num) {
                return mid;
            } else if (arr[mid] < num) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return -1;
    }

    export function recursiveBS(arr: number[], num: number, i: number, j: number): number {
        if (i > j) return -1;

        const mid = Utils.middleIndex(i, j);

        if (arr[mid] == num) {
            return mid;
        } else if (arr[mid] < num) {
            return recursiveBS(arr, num, mid + 1, j)
        } else {
            return recursiveBS(arr, num, i, mid - 1);
        }
    }

    export function lowerBound(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (arr[mid] < num) {
                i = mid + 1;
            } else if (arr[mid] > num) {
                j = mid - 1;
            } else {
                return mid;
            }
        }

        return i;
    }

    export function upperBound(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (arr[mid] < num) {
                i = mid + 1;
            } else if (arr[mid] > num) {
                j = mid - 1;
            } else {
                return mid + 1;
            }
        }

        return i;
    }

    export function searchInsertIndex(arr: number[], num: number): number {
        // Lower Bound Problem
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (arr[mid] < num) {
                i = mid + 1;
            } else if (arr[mid] > num) {
                j = mid - 1;
            } else {
                return mid;
            }
        }

        return i;
    }

    export function floorAndCeil(arr: number[], num: number): number[] {
        // Lower Bound Problem
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (arr[mid] < num) {
                i = mid + 1;
            } else if (arr[mid] > num) {
                j = mid - 1;
            } else {
                return [mid, mid];
            }
        }

        if (j < 0) {
            return [0, 0];
        } else if (i > arr.length - 1) {
            return [arr.length, arr.length];
        }
        return [j, i];
    }
}

const arr = [3, 4, 6, 7, 9, 12, 16, 17];

let ans = BinarySearch.floorAndCeil(arr, 19);
console.log(ans);