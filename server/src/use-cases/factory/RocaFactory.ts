import { PrismaRocaRepository } from "../../repositories/prisma/PrismaRocaRepository"
import { CreateRocaUseCase } from "../create-roca-use-case"
import { FindRocasUseCase } from "../find-rocas-use-case"

export function CreateRocaFactory(){
  const prismaRocaRepository = new PrismaRocaRepository()
  const rocaRepository = new CreateRocaUseCase(prismaRocaRepository)

  return rocaRepository
}

export function FindRocasFactory(){
  const prismaRocaRepository = new PrismaRocaRepository()
  const rocaRepository = new FindRocasUseCase(prismaRocaRepository)

  return rocaRepository
}
