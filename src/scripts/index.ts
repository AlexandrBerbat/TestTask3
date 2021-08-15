import { WinStats } from "./WinStats/WinStats";
import { Simulation } from "./TestStats/Simulation";

// let winStatsA = new WinStats();
// let winStatsB = new WinStats();

// winStatsA.print();

function CreateWinStat(): WinStats {// WinStats - my stats class
    return new WinStats();
};

Simulation.runSimulation(CreateWinStat);
let sim = new Simulation();
sim










// first stats



// winStatsA.log(0.434, 2);
// winStatsA.log(0.434, 2);
// winStatsA.log(0.7, 14);
// winStatsA.log(4, 9);
// winStatsA.log(99.734, 9);
// winStatsA.log(99.734, 9);
// winStatsA.log(4.2, 9);
// winStatsA.log(0, 250000);

//second stats
// winStatsB.log(0.49, 2);
// winStatsB.log(0.7, 4);
// winStatsB.log(4, 2);
// winStatsB.log(9.734, 25);

// console.log("\n");


// console.log("Win exists(0.7): ", winStatsA.getHitCount(0.7));

// console.log("Win exists(0): ", winStatsA.getHitCount(0));
// console.log("Win does not exist(52): ", winStatsA.getHitCount(52));



// console.log("\n");

// winStatsA.merge(winStatsB);




// winStatsA.print();


// console.log("\n");
// winStatsB.print();