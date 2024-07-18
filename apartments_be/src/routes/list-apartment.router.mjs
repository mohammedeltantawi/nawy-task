"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listApartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const listApartmentRouter = express_1.default.Router();
exports.listApartmentRouter = listApartmentRouter;
const list_apartment_model_mjs_1 = require("../models/list-apartment.model.mjs");
listApartmentRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield list_apartment_model_mjs_1.ListApartment.find({});
        res.status(200).json(apartments);
    }
    catch (e) {
        res.status(400).json({ error: "Error retrieving apartments" });
        console.log(e);
    }
}));
listApartmentRouter.post('/add-apartment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newApartment = yield list_apartment_model_mjs_1.ListApartment.create(req.body);
        res.status(200).json(newApartment);
    }
    catch (e) {
        res.status(400).json({ error: "Error adding apartment" });
        console.log(e);
    }
}));
listApartmentRouter.get('/apartment/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartment = yield list_apartment_model_mjs_1.ListApartment.findById(req.params.id);
        res.status(200).json(apartment);
    }
    catch (e) {
        res.status(400).json({ error: "couldn't find apartment" });
        console.log(e);
    }
}));
