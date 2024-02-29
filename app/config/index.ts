import dotenv from "dotenv";
dotenv.config();

export const config = {
  apiVersion: process.env.API_VERSION || "v1",
  weatherApiKey: process.env.WEATHERAPIKEY || "",
  server: {
    port: Number(process.env.SERVER_PORT) || 3001,
    host: process.env.SERVER_HOST || "localhost",
  },
};
