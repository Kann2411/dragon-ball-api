import { CharactersService } from './Characters.service';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    seederCharacters(): Promise<{
        message: string;
    }>;
    getCharacters(page: number, limit: number): Promise<{
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
