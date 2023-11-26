-- CreateEnum
CREATE TYPE "Situation" AS ENUM ('CASA', 'ROCA', 'ELIMINATED');

-- CreateTable
CREATE TABLE "Peao" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "situation" "Situation" NOT NULL,
    "pg_eliminated" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "rocaId" TEXT,

    CONSTRAINT "Peao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roca" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Roca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eliminated" (
    "id" TEXT NOT NULL,
    "peaoId" INTEGER NOT NULL,
    "rocaId" TEXT NOT NULL,
    "pg_eliminated" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Eliminated_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Eliminated_peaoId_key" ON "Eliminated"("peaoId");

-- CreateIndex
CREATE UNIQUE INDEX "Eliminated_rocaId_key" ON "Eliminated"("rocaId");

-- AddForeignKey
ALTER TABLE "Peao" ADD CONSTRAINT "Peao_rocaId_fkey" FOREIGN KEY ("rocaId") REFERENCES "Roca"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eliminated" ADD CONSTRAINT "Eliminated_peaoId_fkey" FOREIGN KEY ("peaoId") REFERENCES "Peao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eliminated" ADD CONSTRAINT "Eliminated_rocaId_fkey" FOREIGN KEY ("rocaId") REFERENCES "Roca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
