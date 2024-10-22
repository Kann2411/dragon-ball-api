"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSourse = exports.config = void 0;
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
(0, dotenv_1.config)({ path: '.development.env' });
exports.config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    synchronize: true,
    dropSchema: true,
};
exports.default = (0, config_1.registerAs)('typeorm', () => exports.config);
exports.connectionSourse = new typeorm_1.DataSource(exports.config);
//# sourceMappingURL=typeorm.js.map