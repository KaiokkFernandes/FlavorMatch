/*
  Warnings:

  - Added the required column `typeOfFood` to the `Local` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Local" ADD COLUMN     "typeOfFood" TEXT NOT NULL;
