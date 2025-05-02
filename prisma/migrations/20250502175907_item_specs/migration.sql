/*
  Warnings:

  - Added the required column `itemBrand` to the `Submissions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemCondition` to the `Submissions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submissions" ADD COLUMN     "itemBrand" TEXT NOT NULL,
ADD COLUMN     "itemCondition" TEXT NOT NULL;
