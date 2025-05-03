import prisma from "../.config/prisma";
import { Request, Response } from "express";

export const userDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const userId = (req as any).user.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send({
      message: "Fetched Successfully",
      user,
    });
  } catch (error) {
    console.log("Error found in userDetails : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
