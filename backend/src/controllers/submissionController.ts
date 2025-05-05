import prisma from "../.config/prisma";
import { Request, Response } from "express";
import { calculateEcoPoints } from "../utils/ecoPoints";

export const submitProduct = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { itemType, itemBrand, itemCondition } = req.body;
    const userId = (req as any).user?.id;

    const files = req.files as Express.Multer.File[];
    const imageUrls = files?.map((file: any) => file.path);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!itemType || !itemBrand || !itemCondition || !imageUrls?.length) {
      return res.status(400).json({ message: "All fields and at least one image are required" });
    }

    const earnedPoints = calculateEcoPoints(itemBrand, itemCondition);

    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = await prisma.Users.update({
      where: { id: userId },
      data: { eco_points: user.eco_points + earnedPoints },
    });

    const admin = await prisma.admin.findFirst({
      orderBy: {
        submissions: {
          _count: 'asc',
        },
      },
      include: {
        submissions: true,
      },
    });

    if (!admin) {
      return res.status(500).json({ message: "No admin available for assignment" });
    }

    const submission = await prisma.submissions.create({
      data: {
        itemType,
        itemBrand,
        itemCondition,
        itemImage: imageUrls[0],
        userId,
        adminId: admin.id,
      },
    });

    res.status(201).json({
      message: "Submission successful and assigned to admin",
      submission,
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        ecoPoints: updatedUser.eco_points,
      },
    });

  } catch (error) {
    console.error("Error in submitProduct:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserSubmissions = async (req: Request, res: Response) : Promise<any> => {
  try{
    console.log("request received");
    
    const userId = (req as any).user.id;
    
    if(!userId){
      return res.status(401).json({ message : "Unauthorized" });
    }

    const submissions = await prisma.submissions.findMany({
      where : {
        userId
      }
    })
    
    res.status(201).json({
      message : "Fetching Successful",
      submissions
    })
  } catch (error) {
    console.error("Error in getUserSubmissions : ", error);
    res.status(500).json({ message : "Internal Server Error "})
  }
}

export const updateSubmission = async (req: Request, res: Response): Promise<any> => {
  try {
    const { submissionId, status } = req.body;

    if (!submissionId || !status) {
      return res.status(400).json({ message: "Submission ID and status are required" });
    }

    const existingSubmission = await prisma.submissions.findUnique({
      where: { id: submissionId },
    });

    if (!existingSubmission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    const updatedSubmission = await prisma.submissions.update({
      where: { id: submissionId },
      data: { status },
    });

    res.status(200).json({
      message: "Submission status updated successfully",
      updatedSubmission,
    });

  } catch (error) {
    console.error("Error in updateSubmission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
