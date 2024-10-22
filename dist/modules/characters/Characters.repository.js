"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Characters_entity_1 = require("../../entities/Characters.entity");
const Planets_entity_1 = require("../../entities/Planets.entity");
const typeorm_2 = require("typeorm");
const characters = require("../../utils/Characters.json");
const Transformations_entity_1 = require("../../entities/Transformations.entity");
let CharactersRepository = class CharactersRepository {
    constructor(planetRepository, characterDBRepository, transformationRepository) {
        this.planetRepository = planetRepository;
        this.characterDBRepository = characterDBRepository;
        this.transformationRepository = transformationRepository;
    }
    async seederCharacters() {
        const planets = await this.planetRepository.find();
        for (const element of characters) {
            const planet = planets.find((p) => p.name === element.originPlanet.name);
            if (planet) {
                const characterImageFileName = element.image.split('/').pop();
                const newCharacter = this.characterDBRepository.create({
                    name: element.name,
                    ki: element.ki,
                    maxKi: element.maxKi,
                    race: element.race,
                    gender: element.gender,
                    description: element.description,
                    image: characterImageFileName,
                    affiliation: element.affiliation,
                    originPlanet: planet,
                });
                const savedCharacters = await this.characterDBRepository.save(newCharacter);
                for (const transformation of element.transformations) {
                    const transformationImageFileName = `/assets/transformations/${transformation.image.split('/').pop()}`;
                    const newTransformation = this.transformationRepository.create({
                        name: transformation.name,
                        image: transformationImageFileName,
                        ki: transformation.ki,
                        character: savedCharacters,
                    });
                    await this.transformationRepository.save(newTransformation);
                }
            }
        }
        return {
            message: 'personajes guardados con exito',
        };
    }
    async getCharacters(page = 1, limit = 5) {
        const offSet = (page - 1) * limit;
        const [FoundCharacters, total] = await this.characterDBRepository.findAndCount({
            skip: offSet,
            take: limit,
        });
        const transformaciones = await this.transformationRepository.find({
            relations: ['character'],
        });
        if (!transformaciones)
            throw new common_1.NotFoundException('no hay transformaciones');
        const characters = FoundCharacters.map((element) => {
            const characterTransformations = transformaciones.filter((transformation) => {
                return transformation.character?.id === element.id;
            });
            return {
                id: element.id,
                name: element.name,
                image: `/assets/pj/${element.image}`,
                ki: element.ki,
                maxKi: element.maxKi,
                race: element.race,
                gender: element.gender,
                description: element.description,
                affiliation: element.affiliation,
                transformations: characterTransformations.map((transformation) => ({
                    id: transformation.id,
                    name: transformation.name,
                    ki: transformation.ki,
                    image: transformation.image,
                })),
            };
        });
        return {
            items: characters,
            meta: {
                totalItems: total,
                totalPages: Math.ceil(total / limit),
                currentPage: page,
                limit: limit,
            },
        };
    }
    async allCharacters() {
        const FoundCharacters = await this.characterDBRepository.find();
        if (!FoundCharacters)
            throw new common_1.NotFoundException('Ejecuta el Get Characters/seeder');
        const transformations = await this.transformationRepository.find({
            relations: ['character'],
        });
        if (!transformations)
            throw new common_1.NotFoundException('no hay transformaciones');
        const characters = FoundCharacters.map((element) => {
            const characterTransformations = transformations.filter((transformation) => {
                return transformation.character?.id === element.id;
            });
            return {
                id: element.id,
                name: element.name,
                image: element.image,
                ki: element.ki,
                maxKi: element.maxKi,
                race: element.race,
                gender: element.gender,
                description: element.description,
                affiliation: element.affiliation,
                transformations: characterTransformations.map((transformation) => ({
                    id: transformation.id,
                    name: transformation.name,
                    ki: transformation.ki,
                    image: transformation.image,
                })),
            };
        });
        return characters;
    }
};
exports.CharactersRepository = CharactersRepository;
exports.CharactersRepository = CharactersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Planets_entity_1.PlanetEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(Characters_entity_1.CharacterEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(Transformations_entity_1.TransformationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CharactersRepository);
//# sourceMappingURL=Characters.repository.js.map