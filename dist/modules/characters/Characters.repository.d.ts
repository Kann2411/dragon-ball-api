import { CharacterEntity } from 'src/entities/Characters.entity';
import { PlanetEntity } from 'src/entities/Planets.entity';
import { Repository } from 'typeorm';
import { TransformationEntity } from 'src/entities/Transformations.entity';
export declare class CharactersRepository {
    private readonly planetRepository;
    private readonly characterDBRepository;
    private readonly transformationRepository;
    constructor(planetRepository: Repository<PlanetEntity>, characterDBRepository: Repository<CharacterEntity>, transformationRepository: Repository<TransformationEntity>);
    seederCharacters(): Promise<{
        message: string;
    }>;
    getCharacters(page?: number, limit?: number): Promise<{
        items: {
            id: string;
            name: string;
            image: string;
            ki: string;
            maxKi: string;
            race: string;
            gender: string;
            description: string;
            affiliation: string;
            transformations: {
                id: string;
                name: string;
                ki: string;
                image: string;
            }[];
        }[];
        meta: {
            totalItems: number;
            totalPages: number;
            currentPage: number;
            limit: number;
        };
    }>;
    allCharacters(): Promise<{
        id: string;
        name: string;
        image: string;
        ki: string;
        maxKi: string;
        race: string;
        gender: string;
        description: string;
        affiliation: string;
        transformations: {
            id: string;
            name: string;
            ki: string;
            image: string;
        }[];
    }[]>;
}
