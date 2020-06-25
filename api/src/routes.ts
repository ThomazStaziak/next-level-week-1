import express from "express";
import knex from "./database/connection";

import PointsController from "./controller/PointsController";
import ItemsController from "./controller/ItemsController";

const routes = express.Router();

routes.get("/items", ItemsController.index);

routes.post("/points", PointsController.create);
routes.get("/points", PointsController.index);
routes.get("/points/:id", PointsController.show);

export default routes;
