function round(num: number): number {
    return Math.round(num * 10) / 10;
}

export class WinStats {

    dataArr: number[][] = [[], []];// 2d arr[ [winAmount, hitCount], ... ]

    log(winAmount: number, hitCount: number): void {

        if (winAmount < 0 || !isFinite(winAmount) || hitCount < 0 || !Number.isInteger(hitCount) || !isFinite(hitCount)) {//?
            console.log(`Error: Wrong values: winAmount:${winAmount}, hitCount:${hitCount}`);
        } else {
            this.dataArr[0].push(round(winAmount));
            this.dataArr[1].push(hitCount);
        }
    }

    getHitCount(winAmount: number): number {

        let indexOfWinAmount: number = this.dataArr[0].indexOf(winAmount);

        return this.dataArr[1][indexOfWinAmount];

    }

    merge(anotherStat: WinStats): void {
        for (let i = 0; i < this.dataArr[0].length; i++) {
            for (let a = 0; a < anotherStat.dataArr[0].length; a++) {
                if (this.dataArr[0][i] == anotherStat.dataArr[0][a]) {
                    this.dataArr[1][i] += anotherStat.dataArr[1][a];
                }
            }
        }
    }

    private sortByWinAmount(): void {
        this.dataArr[0].sort();
    }


    private mergeSameWinAmounts(): void {
        for(let i = 0; i < this.dataArr[0].length; i++)
        {

        }
    }

    print(): void {
        // console.log(this.dataArr)

        // for (let a = 0; a < this.dataArr[0].length; a++) {
        //     console.log(`WinAmount: ${this.dataArr[0][a]} NumberOfWins: ${this.dataArr[1][a]}`)
        // }

        let totalWinAmount: number = 0;
        let AvgWinAmount: number = 0;
        let minWin: number = 0;//NOT A ZERO
        let maxWin: number = 0;






    }


}