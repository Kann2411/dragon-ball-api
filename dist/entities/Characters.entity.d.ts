import { PlanetEntity } from './Planets.entity';
import { TransformationEntity } from './Transformations.entity';
export declare class CharacterEntity {
    id: string;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet: PlanetEntity;
    transformations: TransformationEntity[];
}
