import { Request, Response } from "express";

export const findAllById = async (req: Request, res: Response) => {
  const id = req.params.id;
  return res.json({ id });
};
