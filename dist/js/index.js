"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinStats_1 = require("./WinStats/WinStats");
const Simulation_1 = require("./TestStats/Simulation");
let CreateWinStat = () => {
    return new WinStats_1.WinStats();
};
Simulation_1.Simulation.runSimulation(CreateWinStat);
