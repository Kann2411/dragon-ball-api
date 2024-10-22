import { CharacterEntity } from './Characters.entity';
export declare class PlanetEntity {
    id: string;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    characters: CharacterEntity[];
}
