function round(num: number): number {
    return Math.round(num * 10) / 10;
}

export class WinStats {

    dataArr: number[][] = [];// 2d arr[ [winAmount, hitCount], ... ]

    log(winAmount: number, hitCount: number): void {

        if (winAmount < 0 || !isFinite(winAmount) || hitCount <= 0 || !Number.isInteger(hitCount) || !isFinite(hitCount)) {
            console.log(`Error: Wrong values: winAmount:${winAmount}, hitCount:${hitCount}`);
        } else {
            this.dataArr.push([round(winAmount), hitCount]);
        }
    }

    getHitCount(winAmount: number): number {

        let searchingIndex: number = this.dataArr.findIndex(arr => arr[0] == round(winAmount));

        if (searchingIndex !== -1) {
            return this.dataArr[searchingIndex][1];
        } else {
            return 0;
        }

    }

    merge(anotherStat: WinStats): void {

        anotherStat.dataArr.forEach((item, index) => {

            let searchingIndex = this.dataArr.findIndex(arr => arr[0] == item[0])
            if (searchingIndex !== -1) {
                this.dataArr[searchingIndex][1] += anotherStat.dataArr[index][1];
            } else {
                this.dataArr.push(item);
            }

        });

    }

    private sortByWinAmount(): void {
        this.dataArr.sort((itemA, itemB): number => {
            return itemA[0] - itemB[0];
        });
    }


    private mergeSameWinAmounts(): void {
        for (let i = 0; i < this.dataArr.length - 1; i++) {

            if (this.dataArr[i][0] === this.dataArr[i + 1][0]) {
                this.dataArr[i][1] += this.dataArr[i + 1][1];
                this.dataArr.splice(i + 1, 1);
            }
        }

    }

    print(): void {
        this.sortByWinAmount();
        this.mergeSameWinAmounts();

        let totalWinAmount: number = this.dataArr
            .map((item) => item[0] * item[1]) //multiply win and counts
            .reduce((a, b) => a + b);  // sum it up!

        let totalHitCount: number = this.dataArr
            .map((item) => item[1]) // select only hitCounts
            .reduce((a, b) => a + b); // summarize


        let smallestNonZero = () => {
            if (this.dataArr[0][0] == 0) { //if the smallest is 0
                return this.dataArr[1][0];
            } else {
                return this.dataArr[0][0];
            }
        };

        let biggest = () => {
            return this.dataArr[this.dataArr.length - 1][0];
        };

        console.log("Total win amount: ", round(totalWinAmount));
        console.log("The average win amount: ", round(totalWinAmount / totalHitCount));
        console.log("The smallest non-zero win is", smallestNonZero(), ", the biggest is ", biggest());

        console.log("\n\nAll unique wins (sorted 0...9):");

        this.dataArr.forEach((item, index) => {
            console.log(`${index}. ${item[0]}: ${item[1]}`);
        })

    }

}