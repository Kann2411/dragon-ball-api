"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
class LoggerMiddleware {
    use(req, res, next) {
        const now = new Date().toLocaleString();
        console.log(`se ejecutó el método ${req.method} en la ruta ${req.originalUrl} el dia ${now}`);
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.js.map