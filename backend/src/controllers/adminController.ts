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

export const awardUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const adminId = (req as any).admin?.id;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { submissionId, ecoPoint } = req.body;

    const check = await prisma.submissions.findUnique({
      where: { id: submissionId },
      select: { userId: true },
    });

    if (!check) {
      return res.status(404).json({ message: "Submission not found." });
    }

    const update = await prisma.users.update({
      where: { id: check.userId },
      data: {
        eco_points: ecoPoint,
      },
    });

    return res.status(200).json({ message: "Points awarded", user: update });
  } catch (error) {
    console.error("Error in awarding user:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateStatus = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const adminId = (req as any).admin?.id;
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { submissionId, newStatus } = req.body;

    if (!submissionId) {
      return res.status(400).json({ message: "Submission ID is required" });
    }

    const validStatuses = ["Pending", "In Review", "Approved", "Rejected"];
    if (!validStatuses.includes(newStatus)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const submission = await prisma.submissions.update({
      where: { id: submissionId },
      data: { status: newStatus }
    });

    if (!submission) {
      return res.status(404).json({ message: "Submission not found." });
    }

    return res.status(200).json({ 
      message: "Status updated successfully",
      updatedSubmission: submission 
    });
  } catch (error) {
    console.error("Error in updating status:", error);
    return res.status(500).json({ message: "Server error" });
  }
};