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
exports.PlanetEntity = void 0;
const typeorm_1 = require("typeorm");
const Characters_entity_1 = require("./Characters.entity");
let PlanetEntity = class PlanetEntity {
};
exports.PlanetEntity = PlanetEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlanetEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { unique: true }),
    __metadata("design:type", String)
], PlanetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], PlanetEntity.prototype, "isDestroyed", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], PlanetEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { nullable: true }),
    __metadata("design:type", String)
], PlanetEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Characters_entity_1.CharacterEntity, (character) => character.originPlanet),
    __metadata("design:type", Array)
], PlanetEntity.prototype, "characters", void 0);
exports.PlanetEntity = PlanetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Planets' })
], PlanetEntity);
//# sourceMappingURL=Planets.entity.js.map