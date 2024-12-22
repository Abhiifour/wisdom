/*
  Warnings:

  - Added the required column `votes` to the `Wisdom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wisdom" ADD COLUMN     "votes" INTEGER NOT NULL;
