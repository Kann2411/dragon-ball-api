"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_1 = require("./middlewares/logger");
const path_1 = require("path");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Demo swagger')
        .setDescription('Esta es una API construida con Nest que creamos en el modulo 4 de HENRY')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.useStaticAssets((0, path_1.join)(__dirname, 'assets'), {
        prefix: 'assets',
    });
    app.use(new logger_1.LoggerMiddleware().use);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map