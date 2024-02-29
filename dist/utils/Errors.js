"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
class ErrorResponse extends Error {
    constructor({ status, message, data }) {
        super(message);
        this.status = status;
        this.data = data;
        Object.defineProperty(this, "message", { value: message, enumerable: true });
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=Errors.js.map