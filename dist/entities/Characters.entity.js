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
exports.CharacterEntity = void 0;
const typeorm_1 = require("typeorm");
const Planets_entity_1 = require("./Planets.entity");
const Transformations_entity_1 = require("./Transformations.entity");
let CharacterEntity = class CharacterEntity {
};
exports.CharacterEntity = CharacterEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 30 }),
    __metadata("design:type", String)
], CharacterEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "ki", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "maxKi", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], CharacterEntity.prototype, "affiliation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Planets_entity_1.PlanetEntity, (planet) => planet.characters),
    __metadata("design:type", Planets_entity_1.PlanetEntity)
], CharacterEntity.prototype, "originPlanet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transformations_entity_1.TransformationEntity, (transformation) => transformation.character),
    __metadata("design:type", Array)
], CharacterEntity.prototype, "transformations", void 0);
exports.CharacterEntity = CharacterEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'characters' })
], CharacterEntity);
//# sourceMappingURL=Characters.entity.js.map