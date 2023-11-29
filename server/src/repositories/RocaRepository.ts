import { Prisma, Roca } from "@prisma/client";

export interface RocaRepository{
  create(): Promise<Roca>
  findByIsOpen(): Promise<Roca[] | null>
  updateIsOpen(): Promise<Prisma.BatchPayload>
}