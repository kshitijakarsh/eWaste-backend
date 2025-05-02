-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "eco_points" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Submissions" (
    "id" SERIAL NOT NULL,
    "itemType" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "adminId" INTEGER,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submissions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Submissions" ADD CONSTRAINT "Submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submissions" ADD CONSTRAINT "Submissions_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
