"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const path = __importStar(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const options = {
    key: fs_1.default.readFileSync(path.resolve(__dirname, '../ssl/server.key')),
    cert: fs_1.default.readFileSync(path.resolve(__dirname, '../ssl/server.crt')),
};
app.use(express_1.default.static(path.join(__dirname, '/../../client/dist/')));
app.get('/', (req, res) => {
    res.send('test');
});
app.get('/test', (req, res) => {
    res.send('test');
});
const server = https_1.default.createServer(options, app);
server.listen(5000, () => {
    console.log('Server is running on 5000');
});
