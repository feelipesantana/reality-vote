import { Peao, Prisma } from "@prisma/client";

export interface PeaoRepository{
  create(data: Prisma.PeaoCreateInput ): Promise<Peao>
}