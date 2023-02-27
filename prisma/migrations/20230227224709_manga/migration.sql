-- CreateTable
CREATE TABLE "Manga" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "Chapters" TEXT NOT NULL,
    "Finished" BOOLEAN NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manga_rent" (
    "userId" TEXT NOT NULL,
    "mangaId" TEXT NOT NULL,

    CONSTRAINT "manga_rent_pkey" PRIMARY KEY ("mangaId","userId")
);

-- AddForeignKey
ALTER TABLE "manga_rent" ADD CONSTRAINT "manga_rent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manga_rent" ADD CONSTRAINT "manga_rent_mangaId_fkey" FOREIGN KEY ("mangaId") REFERENCES "Manga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
