import { WinStats } from "./WinStats/WinStats";

let winStatsA = new WinStats();
let winStatsB = new WinStats();

// winStats.print();


//first stats
winStatsA.log(0.434, 2);
winStatsA.log(0.7, 0);
winStatsA.log(4, 999);
winStatsA.log(99.734, 9);

//second stats
// winStatsB.log(0.49, 2);
// winStatsB.log(0.7, 4);
// winStatsB.log(4, 2);
// winStatsB.log(9.734, 25);

console.log("\n");


// console.log("Win exists(0.7): ", winStats.getHitCount(0.7));
// console.log("Win exists(4): ", winStats.getHitCount(4));
// console.log("Win does not exist(52): ", winStats.getHitCount(52));
// console.log("\n");

// winStatsA.merge(winStatsB);




winStatsA.print();
// console.log("\n");
// winStatsB.print();