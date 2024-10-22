import { CharactersRepository } from './Characters.repository';
export declare class CharactersService {
    private readonly charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    seederCharacters(): Promise<{
        message: string;
    }>;
    getCharacters(page: any, limit: any): Promise<{
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
