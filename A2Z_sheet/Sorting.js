class Sorting {

    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return arr;
    }

    selectionSort(arr) {
        // iterate through arr
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            // find min in rest of arr
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            }
            // swap the min with the first element of loop
            this.swap(arr, i, min)
        }
        return arr;
    }

    bubbleSort(arr) {
        // iterate through arr backwards
        for (let i = arr.length - 1; i > 0; i--) {
            // iterate through first i nums
            for (let j = 0; j < i; j++) {
                // if 2 consective nums are decr. swap them
                if (arr[j] > arr[j + 1]) {
                    this.swap(arr, j, j + 1);
                }
            }
        };
        return arr;
    }

    insertionSort(arr) {
        // iterate through arr
        for (let i = 1; i <= arr.length - 1; i++) {
            // iterate through elements at left of arr[i] backwards
            for (let j = i; j > 0; j--) {
                // if left > right swap them
                if (arr[j - 1] > arr[j]) {
                    this.swap(arr, j, j - 1);
                }
            }
        };
        return arr;
    }

    recursiveBubbleSort(arr, n) {
        // n represent last index
        // if n is 0, we're at the first element;
        if (n == 0) return arr;

        // loop through arr and swap two nums if left > right
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                this.swap(arr, i, i + 1)
            }
        }
        return this.recursiveBubbleSort(arr, n - 1)
    }

    recursiveInsertionSort(arr, i) {
        // if index exceeds last element, traversal is complete
        if (i == arr.length) return arr;

        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                this.swap(arr, j - 1, j);
            }
        }

        return this.recursiveInsertionSort(arr, i + 1)
    }

    // Merge Sort - in-place sorting algo
    merge(arr, low, mid, high) {
        let newArr = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                newArr.push(arr[left]);
                left++;
            } else {
                newArr.push(arr[right]);
                right++;
            }
        }

        while (left <= mid) {
            newArr.push(arr[left]);
            left++;
        }
        while (right <= high) {
            newArr.push(arr[right]);
            right++;
        }

        for (let i = 0; i < newArr.length; i++) {
            arr[low + i] = newArr[i];
        }
    }

    mergeSort(arr, low, high) {
        if (low >= high) return;
        const mid = Math.floor((low + high) / 2);

        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);

        this.merge(arr, low, mid, high);
    }

    // Quick Sort
    partition(arr, low, high) {
        let pivot = arr[low];
        let i = low;
        let j = high;

        while (i < j) {
            while (arr[i] <= pivot && i <= high - 1) i++;
            while (arr[j] >= pivot && j >= low + 1) j--;
            if (i < j) this.swap(arr, i, j);
        }

        this.swap(arr, low, j);
        console.log(arr, j)
        return j;
    }

    quickSort(arr, low, high) {
        if (low >= high) return;

        let pIndex = this.partition(arr, low, high);
        this.quickSort(arr, low, pIndex - 1);
        this.quickSort(arr, pIndex + 1, high);
    }

}

const sorter = new Sorting();
const arr = [13, 46, 24, 52, 20, 9];
sorter.quickSort(arr, 0, arr.length - 1)
console.log(arr);