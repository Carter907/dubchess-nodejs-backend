import express from "express";
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
app.get('/apps/dubchess/api', (req: any, res: any) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send('<h1> Yo this is from the backend </h1>');
});
app.listen(port, () => {
    console.log(`Example app listening!!`);
});
