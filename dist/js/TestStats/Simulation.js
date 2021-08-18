"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulation = void 0;
class Simulation {
    static runSimulation(createStatFn) {
        if (createStatFn == null)
            throw Error('create new stat function not specified');
        const startTime = Date.now();
        const resStat = Simulation.runSingleSim(createStatFn);
        resStat.print();
        const durationMs = Date.now() - startTime;
        console.log(`Simulation took ${durationMs}ms.`);
        return durationMs;
    }
    static runSingleSim(createStatFn) {
        const stats = [];
        for (let i = 0; i < Simulation.statsToTestCount; i++) {
            stats.push(createStatFn());
        }
        for (const stat of stats) {
            Simulation.fillStat(stat);
        }
        const resStat = Simulation.mergeStats(createStatFn, stats);
        Simulation.testFinalStatWins(resStat);
        return resStat;
    }
    static fillStat(stat) {
        for (let i = 0; i < Simulation.logIterationCount; i++) {
            if (Math.random() < 0.5) {
                stat.log(0, 1);
                continue;
            }
            const rndWinAmount = Math.random() + Math.floor(Math.random() * 3) + 1;
            const rndHitCount = Math.floor(Math.random() * 2) + 1;
            stat.log(rndWinAmount, rndHitCount);
        }
    }
    static mergeStats(createStatFn, stats) {
        const resStat = createStatFn();
        for (const stat of stats) {
            resStat.merge(stat);
        }
        return resStat;
    }
    static testFinalStatWins(stat) {
        const expectedZerosHitCount = (Simulation.logIterationCount / 2) *
            Simulation.statsToTestCount;
        Simulation.testSingleWin(stat, 0, expectedZerosHitCount);
        const winAmountSmallestIncl = 1;
        const smallestWinAmountStep = 0.1;
        const winAmountBiggestIncl = 4;
        const expectedMiddleHitCount = expectedZerosHitCount / 2 / 10;
        for (let winAmount = winAmountSmallestIncl + smallestWinAmountStep; winAmount < winAmountBiggestIncl; winAmount += smallestWinAmountStep) {
            Simulation.testSingleWin(stat, winAmount, expectedMiddleHitCount);
        }
        const expectedEdgesZerosHitCount = expectedMiddleHitCount / 2;
        Simulation.testSingleWin(stat, winAmountSmallestIncl, expectedEdgesZerosHitCount);
        Simulation.testSingleWin(stat, winAmountBiggestIncl, expectedEdgesZerosHitCount);
        Simulation.testSingleWin(stat, winAmountSmallestIncl - smallestWinAmountStep, 0);
        Simulation.testSingleWin(stat, winAmountBiggestIncl + smallestWinAmountStep, 0);
    }
    static testSingleWin(stat, testableWinAmount, expectedHitsCount) {
        const discrepancy = 0.1;
        const currWinHitCount = stat.getHitCount(testableWinAmount);
        if (!Simulation.checkIsValueInRange(currWinHitCount, expectedHitsCount, discrepancy)) {
            throw new Error(`Statistics contains incorrect data: there are ${currWinHitCount} hits of
   "${testableWinAmount}" but expected ${expectedHitsCount} +/-${discrepancy * 100}% hits.`);
        }
    }
    static checkIsValueInRange(currentValue, referenceValue, discrepancy) {
        return (currentValue === referenceValue ||
            (currentValue > referenceValue * (1 - discrepancy) &&
                referenceValue * (1 + discrepancy) > currentValue));
    }
}
exports.Simulation = Simulation;
Simulation.logIterationCount = 50000;
Simulation.statsToTestCount = 10;
