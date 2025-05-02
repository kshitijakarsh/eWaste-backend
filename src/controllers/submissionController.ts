import prisma from "../.config/prisma";
import { Request, Response } from "express";

export const submitProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { itemType, itemBrand, itemCondition, itemImage } = req.body;
    const userId = (req as any).user.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!itemType || !itemBrand || !itemCondition || !itemImage) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const submission = await prisma.submissions.create({
      data: {
        itemType,
        itemBrand,
        itemCondition,
        itemImage,
        userId,
      },
    });

    res.status(201).json({
      message: "Submission successful",
      submission,
    });
  } catch (error) {
    console.error("Error in submitProduct:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
