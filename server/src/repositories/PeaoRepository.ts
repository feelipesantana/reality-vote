import { Peao, Prisma, Roca, Situation } from "@prisma/client";

export interface PeaoRepository{
  create(data: Prisma.PeaoCreateInput ): Promise<Peao>
  update(id:number, situation:Situation, rocaId: string): Promise<Peao>
  findMany():Promise<Peao[] | null>
}