import { Prisma, Peao } from "@prisma/client";
import { prisma } from "../../libs/prisma";
import { PeaoRepository } from "../PeaoRepository";

export class PrismaPeaoRepository implements PeaoRepository{

  create({name, age, situation}: Prisma.PeaoCreateInput): Promise<Peao> {
      const createPeao = prisma.peao.create({
        data:{
          name,
          age,
          situation
        }
      })

      return createPeao;
  }
}