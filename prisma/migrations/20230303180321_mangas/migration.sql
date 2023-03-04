/*
  Warnings:

  - You are about to drop the `Manga` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "manga_rent" DROP CONSTRAINT "manga_rent_mangaId_fkey";

-- DropTable
DROP TABLE "Manga";

-- CreateTable
CREATE TABLE "mangas" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Chapters" TEXT NOT NULL,
    "Finished" BOOLEAN NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mangas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "manga_rent" ADD CONSTRAINT "manga_rent_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "mangas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
