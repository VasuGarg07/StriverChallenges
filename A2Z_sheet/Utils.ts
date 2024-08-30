export namespace Utils {
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
}