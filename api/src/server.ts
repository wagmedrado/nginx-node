import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3334;

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + TypeScript Server");
// });

app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
