import usersRoutes from "./user.routes.js";

import { static as staticDir } from "express";

const constructorMethod = (app) => {
    app.use("/users", usersRoutes);


    app.use("/public", staticDir("public"));

    // Home page
    app.get("/", (req, res) => {
        return res.send("Hello world!");
    });

    app.use("/{*splat}", (req, res) => {
        res.status(404).render("error", {
            layout: "auth",
            title: "Page Not Found",
            message: "The page you requested could not be found.",
        });
    });
};
export default constructorMethod;
