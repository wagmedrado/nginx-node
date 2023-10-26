import { Router } from "express";
import { findAllById } from "./controller/MainController";

const router = Router();

router.get("/", (_, res) => {
  res.send("Express + TypeScript Server");
});

router.get("/status", (_, res) => {
  res.json({ status: "ok" });
});

router.get("/users/:id", findAllById);

export { router };
