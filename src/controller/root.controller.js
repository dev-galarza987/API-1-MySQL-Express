import express from "express";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

//? --> Get Path Relative
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//* --> Controller --> root
export const getRoot = (req, res) => {
    res.senFile('index.html', {
        root: join(__dirname, 'public')
    }, (err) => {
        if (err) {
            console.error(err);
        }
    });
};