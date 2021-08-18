import { WinStats } from "./WinStats/WinStats";
import { Simulation } from "./TestStats/Simulation";

let CreateWinStat = ():WinStats => {// WinStats - my stats class
    return new WinStats();
};

Simulation.runSimulation(CreateWinStat);
