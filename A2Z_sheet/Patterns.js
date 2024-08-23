class Patterns {

    // Star Pyramid
    starPyramid = (n) => {
        for (let i = 1; i <= n; i++) {
            console.log(
                ' '.repeat(n - i) +
                '*'.repeat(2 * i - 1) +
                ' '.repeat(n - i)
            )
        }
    }

    // Inverse Star Pyramid
    inverseStarPyramid = (n) => {
        for (let i = n; i >= 1; i--) {
            console.log(
                ' '.repeat(n - i) +
                '*'.repeat(2 * i - 1) +
                ' '.repeat(n - i)
            )
        }
    }

    // Diamond Star Pattern
    diamondStar = (n) => {
        starPyramid(n);
        inverseStarPyramid(n);
    }

    // Half Diamond
    halfDiamond = (n) => {
        for (let i = 1; i <= n; i++) {
            console.log(
                '*'.repeat(i) +
                ' '.repeat(n - i)
            )
        }
        for (let i = n; i >= 1; i--) {
            console.log(
                '*'.repeat(i) +
                ' '.repeat(n - i)
            )
        }
    }

    // Binary Triangle
    binTri = (n) => {
        for (let i = 1; i <= n; i++) {
            let start = i % 2;
            let str = '';

            for (let j = 1; j <= i; j++) {
                str += start;
                start = 1 - start;
            }
            console.log(str);
        }
    }

    // Number Crown
    numCrown = (n) => {
        for (let i = 1; i <= n; i++) {
            let str = '';

            for (let j = 1; j <= i; j++) {
                str += j;
            }
            str += ' '.repeat(2 * (n - i));
            for (let j = i; j >= 1; j--) {
                str += j;
            }

            console.log(str);
        }
    };

    // Increasing Number Triangle Pattern
    incNumTri = (n) => {
        let counter = 0;
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j < i; j++) {
                str += (++counter + ' ');
            }
            console.log(str)
        }
    }

    // Increasing Letter Triangle Pattern
    incLetterTriangle = (n) => {
        const charCode = 'A'.charCodeAt()
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                str += String.fromCharCode(charCode + j)
            }
            console.log(str);
        }
    }

    // Inverse Increasing Letter Triangle Pattern
    invIncLetterTriangle = (n) => {
        const charCode = 'A'.charCodeAt()
        for (let i = n; i >= 0; i--) {
            let str = '';
            for (let j = 0; j < i; j++) {
                str += String.fromCharCode(charCode + j)
            }
            console.log(str);
        }
    }

    // Letter Triangle Pattern
    letterTriangle = (n) => {
        const charCode = 'A'.charCodeAt()
        for (let i = 0; i < n; i++) {
            console.log(String.fromCharCode(charCode + i).repeat(i + 1));
        }
    }

    // Alphabet Pyramid
    alphaPyramid = (n) => {
        const charCode = 'A'.charCodeAt();

        for (let i = 0; i < n; i++) {
            let str = ' '.repeat(n - i);

            let j = 0;
            while (j < i) {
                str += String.fromCharCode(charCode + j);
                j++;
            }
            while (j >= 0) {
                str += String.fromCharCode(charCode + j);
                j--
            }


            str += ' '.repeat(n - i)
            console.log(str);
        }
    }

    // Alpha-Triangle Pattern
    alphaTriangle = (n) => {
        const charCode = 'A'.charCodeAt() - 1;
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                str = String.fromCharCode(charCode + (n - j)) + ' ' + str;
            }
            console.log(str);
        }
    }

    /* Symmetric-Void Pattern
     * tip - can use diamondStar method  with a flag to
     * decide whether the pattern is solid or hollow
     */
    symmetricVoid = (n) => {
        const str = (n, i) => console.log(
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
    symmetricButterfly = (n) => {
        const str = (n, i) => console.log(
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
    hollowRectangle = (n) => {
        console.log('*'.repeat(n));
        for (let i = 0; i < n - 2; i++) {
            console.log('*' + ' '.repeat(n - 2) + '*');
        }
        console.log('*'.repeat(n));
    }

    /**  The Number Pattern (Spiral). eg -
     * 3 3 3 3 3
     * 3 2 2 2 3
     * 3 2 1 2 3
     * 3 2 2 2 3
     * 3 3 3 3 3
     * Tip - minimum distance approach
     */
    numberPattern = (n) => {
        const totalLines = 2 * n - 1;

        for (let i = 0; i < totalLines; i++) {
            let str = ''; 0

            for (let j = 0; j < totalLines; j++) {
                /**
                 * distances :-
                 * top = i; bottom = t - 1 - i;
                 * left = j; right = t - 1 - j;
                 */
                str += (n - Math.min(i, j, totalLines - 1 - i, totalLines - 1 - j)) + ' '
            }
            console.log(str)
        }
    }

}

const patternInstance = new Patterns();

patternInstance.numberPattern(5);