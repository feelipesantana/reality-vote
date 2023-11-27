/*
  Warnings:

  - Added the required column `image` to the `Peao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Peao" ADD COLUMN     "image" TEXT NOT NULL;
