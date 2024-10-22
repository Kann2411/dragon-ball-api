import { PlanetEntity } from 'src/entities/Planets.entity';
import { Repository } from 'typeorm';
export declare class PlanetsRepository {
    private planetDBRepository;
    constructor(planetDBRepository: Repository<PlanetEntity>);
    seedPlanets(): Promise<{
        message: string;
    }>;
    getPlanets(): Promise<PlanetEntity[]>;
}
