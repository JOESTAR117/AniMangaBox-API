/*
  Warnings:

  - You are about to drop the `manga_rent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mangas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "manga_rent" DROP CONSTRAINT "manga_rent_mangaId_fkey";

-- DropForeignKey
ALTER TABLE "manga_rent" DROP CONSTRAINT "manga_rent_userId_fkey";

-- DropTable
DROP TABLE "manga_rent";

-- DropTable
DROP TABLE "mangas";
