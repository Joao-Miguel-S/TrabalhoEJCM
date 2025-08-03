/*
  Warnings:

  - Added the required column `hash` to the `Vendedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `Vendedor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendedor" ADD COLUMN     "hash" TEXT NOT NULL,
ADD COLUMN     "salt" TEXT NOT NULL;
