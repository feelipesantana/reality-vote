/*
  Warnings:

  - The values [ELIMINATED] on the enum `Situation` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Situation_new" AS ENUM ('CASA', 'ROCA', 'ELIMINADO');
ALTER TABLE "Peao" ALTER COLUMN "situation" TYPE "Situation_new" USING ("situation"::text::"Situation_new");
ALTER TYPE "Situation" RENAME TO "Situation_old";
ALTER TYPE "Situation_new" RENAME TO "Situation";
DROP TYPE "Situation_old";
COMMIT;
