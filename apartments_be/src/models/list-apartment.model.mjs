"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListApartment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const listApartmentSchema = new mongoose_1.default.Schema({
    name: String,
    area: String,
    price: Number,
    resale: Boolean,
    about: String,
    bedrooms: Number,
    bathrooms: Number
});
const ListApartment = mongoose_1.default.model('ListApartment', listApartmentSchema);
exports.ListApartment = ListApartment;
