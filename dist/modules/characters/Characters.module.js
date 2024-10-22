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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersModule = void 0;
const common_1 = require("@nestjs/common");
const Characters_controller_1 = require("./Characters.controller");
const Characters_service_1 = require("./Characters.service");
const Characters_repository_1 = require("./Characters.repository");
const typeorm_1 = require("@nestjs/typeorm");
const Characters_entity_1 = require("../../entities/Characters.entity");
const Planets_entity_1 = require("../../entities/Planets.entity");
const Transformations_entity_1 = require("../../entities/Transformations.entity");
let CharactersModule = class CharactersModule {
    constructor(charactersRepository) {
        this.charactersRepository = charactersRepository;
    }
    async onModuleInit() {
        console.log('preloading Characters...');
        await this.charactersRepository.seederCharacters();
    }
};
exports.CharactersModule = CharactersModule;
exports.CharactersModule = CharactersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Characters_entity_1.CharacterEntity]),
            typeorm_1.TypeOrmModule.forFeature([Planets_entity_1.PlanetEntity]),
            typeorm_1.TypeOrmModule.forFeature([Transformations_entity_1.TransformationEntity]),
        ],
        controllers: [Characters_controller_1.CharactersController],
        providers: [Characters_service_1.CharactersService, Characters_repository_1.CharactersRepository],
    }),
    __metadata("design:paramtypes", [Characters_repository_1.CharactersRepository])
], CharactersModule);
//# sourceMappingURL=Characters.module.js.map