"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes = require('./routes')(express.Router());
const app = express();
app.use('/', routes);
exports.default = app;
//# sourceMappingURL=app.js.map