"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/apps/dubchess/api', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send('<h1> Hello World </h1>');
});
app.listen(port, () => {
    console.log(`Example app listening!!`);
});
