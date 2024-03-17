import session from "express-session";
import env from "../lib/functions/env";
import RedisStore from "connect-redis";
import { redisClient } from "../utils/redis-client";
import { ONE_HOUR } from "../lib/constants/durations";

const { SESSION_SECRET } = env();

export default (app) => {
  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: true,
        expires: new Date(Date.now() + ONE_HOUR),
        maxAge: ONE_HOUR,
      },
    })
  );
};
