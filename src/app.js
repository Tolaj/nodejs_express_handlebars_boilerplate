import express from "express";
import configRoutes from "./routes/index.js";
import handlebars from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(requestLogger);

// handlebars setup

// app.use(setSessionLocals);
app.engine(
    "handlebars",
    handlebars.engine({
        defaultLayout: "main",
        helpers: {
            eq: (a, b) => a === b,
            notEq: (a, b) => a !== b,
            eqStr: (a, b) => String(a) === String(b),
            or: (a, b) => a || b,
            and: (a, b) => a && b,
            not: (a) => !a,
            json: (obj) => JSON.stringify(obj),
        },
        partialsDir: ['views/partials/']
    })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

configRoutes(app);


export default app;
