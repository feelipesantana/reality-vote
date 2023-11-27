import { PrismaPeaoRepository } from "../../repositories/prisma/PrismaPeaoRepository";
import { CreatePeaoUseCase } from "../create-peao-use-case";
import { UpdatePeaoUseCase } from "../update-peao-use-case";

export function CreatePeaoFactory(){
  const prismaPeaoRepository = new PrismaPeaoRepository()
  const peaoRepository = new CreatePeaoUseCase(prismaPeaoRepository)

  return peaoRepository
}


export function UpdatePeaoFactory(){
  const prismaPeaoRepository = new PrismaPeaoRepository()
  const peaoRepository = new UpdatePeaoUseCase(prismaPeaoRepository)

  return peaoRepository
}