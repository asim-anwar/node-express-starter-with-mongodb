import env from "../lib/functions/env";

export const isDevelopment = () => env().NODE_ENV === "development";
