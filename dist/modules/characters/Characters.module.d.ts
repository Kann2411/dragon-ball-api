import { CharactersRepository } from './Characters.repository';
export declare class CharactersModule {
    private readonly charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    onModuleInit(): Promise<void>;
}
