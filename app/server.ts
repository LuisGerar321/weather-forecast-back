import express, { Request, Response } from "express";
import { json } from "express";
import cors from "cors";
import { config } from "./config";
import WeatherRoutes from "./routes/WeatherRoutes";

const { apiVersion } = config; //v1
const { port, host } = config.server;

const server = express();
server.use(json());
server.use(cors());

server.get(`/${apiVersion}/test`, (req: Request, res: Response) => {
  try {
    return res.status(200).send({
      status: 200,
      message: "Server running well.",
      data: "",
    });
  } catch (error) {
    console.error(error);
    res.send(500).send({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

server.use(`/${apiVersion}/weatherforecast`, WeatherRoutes);

export const setupServer = async (): Promise<void> => {
  return new Promise((resolve) => {
    server.listen(port, host, () => {
      console.log(`Server running at http://${host}:${port}`);
      resolve();
    });
  });
};
