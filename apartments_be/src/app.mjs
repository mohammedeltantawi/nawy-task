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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const list_apartment_router_mjs_1 = require("./routes/list-apartment.router.mjs");
dotenv_1.default.config();
const MongoDB_Connection_String = (_a = process.env.MONGODB_URL) !== null && _a !== void 0 ? _a : "";
function connectToMongoDB(connectionString) {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect(connectionString);
        console.log('Connected to DB');
    });
}
try {
    await connectToMongoDB(MongoDB_Connection_String);
}
catch (e) {
    console.log('error connecting to Mongo', e);
}
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('/apartments-list', list_apartment_router_mjs_1.listApartmentRouter);
app.get('/', (req, res) => {
    res.send('well done!');
});
app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});
