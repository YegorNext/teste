/*
  Warnings:

  - You are about to drop the column `createdBy` on the `ForbiddenWord` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ForbiddenWord" DROP CONSTRAINT "ForbiddenWord_createdBy_fkey";

-- AlterTable
ALTER TABLE "ForbiddenWord" DROP COLUMN "createdBy";

-- AlterTable
ALTER TABLE "Server" ALTER COLUMN "expiredAt" SET DEFAULT (now() + interval '1 month' - interval '1 day');
