import { PrismaRocaRepository } from "../../repositories/prisma/PrismaRocaRepository"
import { CreateRocaUseCase } from "../create-roca-use-case"

export function CreateRocaFactory(){
  const prismaRocaRepository = new PrismaRocaRepository()
  const rocaRepository = new CreateRocaUseCase(prismaRocaRepository)

  return rocaRepository
}
