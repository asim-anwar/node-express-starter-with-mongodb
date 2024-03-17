import mongoose from "mongoose";

import env from "../lib/functions/env";
import logger from "./logger";

const { DB_HOST, DB_USER, DB_PORT, DB_PASS, DB_NAME } = env();

const connectionString = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/`;

const loadDatabase = () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      logger.info("Database connection established");
    })
    .catch((error) => {
      console.log(DB_USER);
      logger.error("Database connection error", error);
    });
};

export default loadDatabase;
