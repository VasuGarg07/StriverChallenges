import { Utils } from "./Utils";

namespace LinearBinarySearch {
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
        let ans = j;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (arr[mid] > num) {
                ans = mid;
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }

        return ans;
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

    export function lastOccurance(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1, ans = -1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);
            if (arr[mid] == num) {
                ans = mid;
                i = mid + 1;
            } else if (arr[mid] < num) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return ans;
    }

    export function firstOccurance(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1, ans = -1;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);
            if (arr[mid] == num) {
                ans = mid;
                j = mid - 1;
            } else if (arr[mid] > num) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }

        return ans;
    }

    export function countOccurence(arr: number[], num: number): number {
        const first = firstOccurance(arr, num);
        const last = lastOccurance(arr, num);
        return (first < 0 || last < 0) ? 0 : last - first + 1;
    }

    export function searchInRotated(arr: number[], num: number): number {
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);

            if (arr[mid] == num) {
                return mid;
            } else if (arr[mid] < num) {
                if (num <= arr[j]) {
                    i = mid + 1;
                } else {
                    j = mid - 1;
                }
            } else {
                if (arr[i] <= num) {
                    j = mid - 1;
                } else {
                    i = mid + 1;
                }
            }
        }

        return -1;
    }

    export function searchInRotatedII(arr: number[], num: number): boolean {
        let i = 0, j = arr.length - 1;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);

            if (arr[mid] == num) {
                return true;
            }

            //Edge case:
            if (arr[i] === arr[mid] && arr[mid] === arr[j]) {
                i = i + 1;
                j = j - 1;
                continue;
            }

            if (arr[i] < arr[mid]) {
                if (arr[i] <= num && num <= arr[mid]) {
                    j = mid - 1;
                } else {
                    i = mid + 1;
                }
            } else {
                if (arr[mid] <= num && num <= arr[j]) {
                    i = mid + 1;
                } else {
                    j = mid - 1;
                }
            }
        }

        return false;
    }

    export function minimumInSorted(arr: number[]): number {
        let i = 0, j = arr.length - 1, ans = Infinity;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);


            if (arr[i] < arr[mid]) {
                ans = Math.min(ans, arr[i]);
                i = mid + 1;
            } else {
                ans = Math.min(ans, arr[mid]);
                j = mid - 1;
            }
        }

        return ans;
    }

    export function singleElement(arr: number[]): number {

        let i = 0, j = arr.length - 1;

        if (i == j) return arr[i];
        if (arr[i] != arr[i + 1]) return arr[i];
        if (arr[j] != arr[j - 1]) return arr[j];

        i++, j++;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);
            console.log(i, j)

            if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
                return arr[mid];
            }

            if (
                (mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
                (mid % 2 == 1 && arr[mid] == arr[mid - 1])
            ) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return -1
    }

    export function peakElement(arr: number[]) {
        let n = arr.length;

        if (n == 1) return arr[0];
        if (arr[0] > arr[1]) return arr[0];
        if (arr[n - 1] > arr[n - 2]) return arr[n - 1];

        let i = 1, j = n - 2;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);
            if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
                return mid;
            } else if (arr[mid] > arr[mid - 1]) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return -1;
    }
}

namespace NumericBinarySearch {
    export function minSquareRoot(n: number): number {
        if (n <= 1) return n;

        let i = 1, j = n;
        let ans = 1;

        while (i <= j) {
            let mid = Utils.middleIndex(i, j);

            if (mid * mid <= n) {
                ans = mid;
                i = mid + 1;
            } else {
                j = mid - 1
            }
        }

        return ans;
    }

    export function NthRoot(n: number, m: number): number {
        if (n == 1) {
            return m;
        }

        let i = 1, j = m;

        while (i <= j) {
            const mid = Utils.middleIndex(i, j);

            if (mid ** n == m) {
                return mid;
            } else if (mid ** n < m) {
                i = mid + 1;

            } else {
                j = mid - 1;
            }
        }

        return -1;
    }
}


let ans = NumericBinarySearch.NthRoot(6, 64);
console.log(ans);