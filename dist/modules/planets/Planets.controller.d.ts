import { PlanetsService } from './Planets.service';
export declare class PlanetsController {
    private readonly planetsService;
    constructor(planetsService: PlanetsService);
    seedPlanets(): Promise<{
        message: string;
    }>;
    getPlanets(): Promise<import("../../entities/Planets.entity").PlanetEntity[]>;
}
