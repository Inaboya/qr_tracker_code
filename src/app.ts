import bodyParser from "body-parser";
import express, { Application } from "express";
import { db } from "./models";
import { routes } from "./routes";

export function expressApp() {
  db.sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  
  const app: Application = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/", routes);

  return app;
}
