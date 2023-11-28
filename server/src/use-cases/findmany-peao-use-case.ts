import { Peao } from "@prisma/client";
import { PeaoRepository } from "../repositories/PeaoRepository";

type FindPeaoUseCaseResponse = Peao[]

export class FindPeaoUseCase{
  constructor(private peaoRepository: PeaoRepository){}
  async execute():Promise<FindPeaoUseCaseResponse>{
    
    const findPeoes = await this.peaoRepository.findMany()

    if (!findPeoes) {
      throw new Error("Peao no found");
    }
    return findPeoes
  }
}