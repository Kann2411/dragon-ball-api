import { PlanetsRepository } from './Planets.repository';
export declare class PlanetsService {
    private readonly planetRepository;
    constructor(planetRepository: PlanetsRepository);
    seedPlanets(): Promise<{
        message: string;
    }>;
    getPlanets(): Promise<import("../../entities/Planets.entity").PlanetEntity[]>;
}
