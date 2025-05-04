import { Request, Response } from "express";
import prisma from "../.config/prisma";

export const adminDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const adminId = (req as any).admin?.id;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = await prisma.admin.findUnique({
      where: {
        id: adminId,
      },
      include: {
        submissions: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({
      message: "Fetched successfully",
      admin,
    });
  } catch (error) {
    console.error("Error in adminDetails:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const adminJobs = async (req: Request, res: Response): Promise<any> => {
  try {
    const adminId = (req as any).admin?.id;

    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const submissions = await prisma.submissions.findMany({
      where: {
        adminId: adminId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Submissions assigned to admin fetched successfully",
      submissions,
    });
  } catch (error) {
    console.error("Error fetching admin submissions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateAdmin = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name } = req.body;
    const adminId = (req as any).admin.id;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = await prisma.admin.update({
      where: {
        id: adminId,
      },
      data: {
        name: name,
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send({
      message: "Updated Successfully",
      admin,
    });
  } catch (error) {
    console.log("Error found in updateAdmin : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAdmin = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const adminId = (req as any).admin.id;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = await prisma.admin.delete({
      where: {
        id: adminId,
      },
    });

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    res.send({
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log("Error found in deleteAdmin : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
