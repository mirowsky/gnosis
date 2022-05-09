"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.vite_tsconfig_path = void 0;
var tsconfig_json_1 = require("../tsconfig.json");
var path_1 = require("path");
var vite_tsconfig_path = function () {
    var accumulator = [];
    for (var key in tsconfig_json_1.compilerOptions.paths) {
        var path = tsconfig_json_1.compilerOptions.paths[key];
        accumulator.push({
            find: key,
            replacement: path_1.resolve.apply(void 0, __spreadArray([process.cwd()], path, false))
        });
    }
    return accumulator;
};
exports.vite_tsconfig_path = vite_tsconfig_path;
