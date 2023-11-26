import { PrismaPeaoRepository } from "../../repositories/prisma/PrismaPeaoRepository";
import { PeaoUseCase } from "../PeaoUseCase";

export function PeaoFactory(){
  const prismaPeaoRepository = new PrismaPeaoRepository()
  const peaoRepository = new PeaoUseCase(prismaPeaoRepository)

  return peaoRepository
}