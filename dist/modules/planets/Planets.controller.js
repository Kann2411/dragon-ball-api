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
exports.PlanetsController = void 0;
const common_1 = require("@nestjs/common");
const Planets_service_1 = require("./Planets.service");
const swagger_1 = require("@nestjs/swagger");
let PlanetsController = class PlanetsController {
    constructor(planetsService) {
        this.planetsService = planetsService;
    }
    seedPlanets() {
        return this.planetsService.seedPlanets();
    }
    getPlanets() {
        return this.planetsService.getPlanets();
    }
};
exports.PlanetsController = PlanetsController;
__decorate([
    (0, common_1.Get)('seeder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanetsController.prototype, "seedPlanets", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanetsController.prototype, "getPlanets", null);
exports.PlanetsController = PlanetsController = __decorate([
    (0, swagger_1.ApiTags)('Planets'),
    (0, common_1.Controller)('planets'),
    __metadata("design:paramtypes", [Planets_service_1.PlanetsService])
], PlanetsController);
//# sourceMappingURL=Planets.controller.js.map