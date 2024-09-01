export namespace Utils {
    /**
     * Swaps two elements in an array.
     * @param arr - The array containing the elements to swap.
     * @param i - The index of the first element to swap.
     * @param j - The index of the second element to swap.
     * @returns The array with the swapped elements.
     */
    export function arraySwap(arr: number[], i: number, j: number): number[] {
        [arr[i], arr[j]] = [arr[j], arr[i]];
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
            Utils.arraySwap(arr, left, right);
            left++;
            right--;
        }
    }

    /**
     * Prints a matrix as a grid
     * @param {number[][]} matrix - Matrix of size M * N
     */
    export function printMatrix(matrix: number[][]): void {
        matrix.forEach(row => {
            console.log(row.join(' '))
        })
    }
}