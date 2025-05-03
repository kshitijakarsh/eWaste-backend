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

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = (req as any).user.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.users.delete({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send({
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log("Error found in deleteUser : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const updateUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const {name} = req.body;
    const userId = (req as any).user.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await prisma.users.update({
      where: {
        id: userId,
      },
      data : {
        name : name
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send({
      message: "Updated Successfully",
      user
    });
  } catch (error) {
    console.log("Error found in updateUser : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};