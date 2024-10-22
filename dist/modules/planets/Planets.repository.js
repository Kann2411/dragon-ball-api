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
exports.PlanetsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Planets_entity_1 = require("../../entities/Planets.entity");
const typeorm_2 = require("typeorm");
const characters = require("../../utils/Characters.json");
let PlanetsRepository = class PlanetsRepository {
    constructor(planetDBRepository) {
        this.planetDBRepository = planetDBRepository;
    }
    async seedPlanets() {
        characters.map(async (element) => {
            await this.planetDBRepository
                .createQueryBuilder()
                .insert()
                .into(Planets_entity_1.PlanetEntity)
                .values({
                name: element.originPlanet.name,
                isDestroyed: element.originPlanet.isDestroyed,
                description: element.originPlanet.description,
                image: element.originPlanet.image,
            })
                .orIgnore()
                .execute();
        });
        return {
            message: 'Planetas guardados con exito',
        };
    }
    async getPlanets() {
        return this.planetDBRepository.find();
    }
};
exports.PlanetsRepository = PlanetsRepository;
exports.PlanetsRepository = PlanetsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Planets_entity_1.PlanetEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PlanetsRepository);
//# sourceMappingURL=Planets.repository.js.map