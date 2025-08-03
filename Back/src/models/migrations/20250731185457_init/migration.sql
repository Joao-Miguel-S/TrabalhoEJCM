/*
  Warnings:

  - Added the required column `imagemCaminho` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "imagemCaminho" TEXT NOT NULL;
