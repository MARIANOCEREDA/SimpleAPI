"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.logErrors = void 0;
/**
 * @name logErrors
 * @type Middleware function
 *
 * @brief Log errors into the console.
 *
 * @param err Error
 * @param req express.Request
 * @param res expres.Response
 * @param next express.NextFunction
 */
function logErrors(err, req, res, next) {
    console.error(err);
    next(err);
}
exports.logErrors = logErrors;
/**
 * @name errorHandler
 * @type Middleware function
 *
 * @brief Send previously raised errors as response to the client.
 *
 * @param err Error
 * @param req express.Request
 * @param res expres.Response
 * @param next express.NextFunction
 */
function errorHandler(err, req, res, next) {
    res.status(500).json({
        name: err.name,
        message: err.message
    });
}
exports.errorHandler = errorHandler;
