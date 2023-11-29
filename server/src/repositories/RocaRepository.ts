import { Prisma, Roca } from "@prisma/client";

export interface RocaRepository{
  create(): Promise<Roca>
  findMany(): Promise<Roca[] | null>
  findByIsOpen(): Promise<Roca[] | null>
  updateIsOpen(): Promise<Prisma.BatchPayload>
}