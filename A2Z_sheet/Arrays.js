class ArrayHelper {

    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }

    // EASY PROBLEMS

    findLargest(arr) {
        let max = arr[0];

        arr.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        return max;
    }

    secondMin(arr) {
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

    isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) return false;
        }
        return true;
    }

    // BruteForce
    removeDuplicates(arr) {
        let set = new Set(arr);
        let uniqueArr = Array.from(set);
        for (let i = 0; i < uniqueArr.length; i++) {
            arr[i] = uniqueArr[i];
        }
        return uniqueArr.length;
    }
    // Optimized
    optimizedRemoveDuplicates(arr) {
        if (arr.length < 2) return arr.length;
        let i = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                ++i;
                arr[i] = arr[j];
            }
        }
        console.log(arr)
        return ++i;
    }

    leftShiftBy1(arr) {
        if (arr.length < 2) return arr;

        let first = arr[0]
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = first;
        return arr
    }

    // using reversal
    reversal(arr, left, right) {
        while (left < right) {
            this.swap(arr, left, right);
            left++;
            right--
        }
    }

    rightRotateByK(arr, k) {
        this.reversal(arr, 0, arr.length - 1 - k);
        this.reversal(arr, arr.length - k, arr.length - 1)
        this.reversal(arr, 0, arr.length - 1)
        return arr;
    }

    leftRotateByK(arr, k) {
        this.reversal(arr, 0, k - 1);
        this.reversal(arr, k, arr.length - 1);
        this.reversal(arr, 0, arr.length - 1)
    }

    pushZeroesToEnd(arr) {
        if (arr.length < 2) return arr;

        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                arr[i - count] = arr[i];
            } else {
                count += 1;
            }
        }

        for (let i = arr.length - count; i < arr.length - 1; i++) {
            arr[i] = 0
        }
    }

    // optimized version - two pointers
    optimizedPshZeroesToEnd(arr) {
        let j = arr.indexOf(0);
        if (j == -1) return arr;

        for (let i = j + 1; i < arr.length; i++) {
            if (arr[i]) {
                this.swap(arr, i, j);
                j++
            }
        }
    }

}

const arrayHelper = new ArrayHelper();
const arr = [1, 0, 2, 0, 3, 0, 4, 5, 0, 6, 7, 0];
arrayHelper.optimizedPshZeroesToEnd(arr, 3)
console.log(arr)