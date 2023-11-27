import { Prisma, Peao, Roca, Situation } from "@prisma/client";
import { prisma } from "../../libs/prisma";
import { PeaoRepository } from "../PeaoRepository";

export class PrismaPeaoRepository implements PeaoRepository{

  async create({name, age, situation, image}: Prisma.PeaoCreateInput): Promise<Peao> {
      const createPeao = prisma.peao.create({
        data:{
          name,
          age,
          image,
          situation
        }
      })

      return createPeao;
  }
  
  async update(id: number, situation: Situation): Promise<Peao> { 
    const updateSituation = await prisma.peao.update({
      where:{
        id
      },
      data:{
        situation
      }
    })
    return updateSituation
  }
}