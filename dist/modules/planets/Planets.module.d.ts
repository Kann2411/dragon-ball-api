import { PlanetsRepository } from './Planets.repository';
export declare class PlanetsModule {
    private readonly planetRepository;
    constructor(planetRepository: PlanetsRepository);
    onModuleInit(): Promise<void>;
}
