export namespace Patterns {

    // Star Pyramid
    export function starPyramid(n: number): void {
        for (let i = 1; i <= n; i++) {
            console.log(
                ' '.repeat(n - i) +
                '*'.repeat(2 * i - 1) +
                ' '.repeat(n - i)
            );
        }
    }

    // Inverse Star Pyramid
    export function inverseStarPyramid(n: number): void {
        for (let i = n; i >= 1; i--) {
            console.log(
                ' '.repeat(n - i) +
                '*'.repeat(2 * i - 1) +
                ' '.repeat(n - i)
            );
        }
    }

    // Diamond Star Pattern
    export function diamondStar(n: number): void {
        starPyramid(n);
        inverseStarPyramid(n);
    }

    // Half Diamond
    export function halfDiamond(n: number): void {
        for (let i = 1; i <= n; i++) {
            console.log(
                '*'.repeat(i) +
                ' '.repeat(n - i)
            );
        }
        for (let i = n; i >= 1; i--) {
            console.log(
                '*'.repeat(i) +
                ' '.repeat(n - i)
            );
        }
    }

    // Binary Triangle
    export function binTri(n: number): void {
        for (let i = 1; i <= n; i++) {
            let start = i % 2;
            let str = '';

            for (let j = 1; j <= i; j++) {
                str += start.toString();
                start = 1 - start;
            }
            console.log(str);
        }
    }

    // Number Crown
    export function numCrown(n: number): void {
        for (let i = 1; i <= n; i++) {
            let str = '';

            for (let j = 1; j <= i; j++) {
                str += j.toString();
            }
            str += ' '.repeat(2 * (n - i));
            for (let j = i; j >= 1; j--) {
                if (j > 0) str += j.toString();
            }

            console.log(str);
        }
    }

    // Increasing Number Triangle Pattern
    export function incNumTri(n: number): void {
        let counter = 0;
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j < i; j++) {
                str += (++counter + ' ');
            }
            console.log(str);
        }
    }

    // Increasing Letter Triangle Pattern
    export function incLetterTriangle(n: number): void {
        const charCode = 'A'.charCodeAt(0);
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                str += String.fromCharCode(charCode + j);
            }
            console.log(str);
        }
    }

    // Inverse Increasing Letter Triangle Pattern
    export function invIncLetterTriangle(n: number): void {
        const charCode = 'A'.charCodeAt(0);
        for (let i = n; i >= 0; i--) {
            let str = '';
            for (let j = 0; j < i; j++) {
                str += String.fromCharCode(charCode + j);
            }
            console.log(str);
        }
    }

    // Letter Triangle Pattern
    export function letterTriangle(n: number): void {
        const charCode = 'A'.charCodeAt(0);
        for (let i = 0; i < n; i++) {
            console.log(String.fromCharCode(charCode + i).repeat(i + 1));
        }
    }

    // Alphabet Pyramid
    export function alphaPyramid(n: number): void {
        const charCode = 'A'.charCodeAt(0);

        for (let i = 0; i < n; i++) {
            let str = ' '.repeat(n - i);

            let j = 0;
            while (j < i) {
                str += String.fromCharCode(charCode + j);
                j++;
            }
            while (j >= 0) {
                str += String.fromCharCode(charCode + j);
                j--;
            }

            str += ' '.repeat(n - i);
            console.log(str);
        }
    }

    // Alpha-Triangle Pattern
    export function alphaTriangle(n: number): void {
        const charCode = 'A'.charCodeAt(0) - 1;
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                str = String.fromCharCode(charCode + (n - j)) + ' ' + str;
            }
            console.log(str);
        }
    }

    // Symmetric-Void Pattern
    export function symmetricVoid(n: number): void {
        const str = (n: number, i: number) => console.log(
            '*'.repeat(n - i) +
            ' '.repeat(2 * i) +
            '*'.repeat(n - i)
        );

        for (let i = 0; i < n; i++) {
            str(n, i);
        }
        for (let i = n - 1; i >= 0; i--) {
            str(n, i);
        }
    }

    // Symmetric-Butterfly Pattern
    export function symmetricButterfly(n: number): void {
        const str = (n: number, i: number) => console.log(
            '*'.repeat(i) +
            ' '.repeat(2 * (n - i)) +
            '*'.repeat(i)
        );
        for (let i = 1; i <= n; i++) {
            str(n, i);
        }
        for (let i = n - 1; i >= 1; i--) {
            str(n, i);
        }
    }

    // Hollow Rectangle Pattern
    export function hollowRectangle(n: number): void {
        console.log('*'.repeat(n));
        for (let i = 0; i < n - 2; i++) {
            console.log('*' + ' '.repeat(n - 2) + '*');
        }
        console.log('*'.repeat(n));
    }

    // Number Pattern (Spiral)
    export function numberPattern(n: number): void {
        const totalLines = 2 * n - 1;

        for (let i = 0; i < totalLines; i++) {
            let str = '';

            for (let j = 0; j < totalLines; j++) {
                str += (n - Math.min(i, j, totalLines - 1 - i, totalLines - 1 - j)).toString() + ' ';
            }
            console.log(str);
        }
    }
}

// Demonstration Examples for a Function
console.log("Star Pyramid:");
Patterns.starPyramid(3);
