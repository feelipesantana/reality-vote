import { Prisma, Peao, Roca, Situation, $Enums } from "@prisma/client";
import { prisma } from "../../libs/prisma";
import { RocaRepository } from "../RocaRepository";

export class PrismaRocaRepository implements RocaRepository{

  async create(): Promise<Roca> {
    const createPeao = await prisma.roca.create({
      data: {
        isOpen: true // Se necessário, adicione os campos que precisam ser preenchidos
      }
    })
    return createPeao;
  }
  async findMany(): Promise<Roca[] | null> {
    
    const findRocas = await prisma.roca.findMany()
    
    return findRocas
  }

  async findByIsOpen(): Promise<Roca[]> {
    
    const findRoca = await prisma.roca.findMany({
      where:{
        isOpen:true
      }
    })
    return findRoca;
  }
  
  async updateIsOpen(): Promise<Prisma.BatchPayload>{
    
    const updatedRocas = await prisma.roca.updateMany({
      where:{
        isOpen:true
      },
      data:{
        isOpen: false
      }
    })

    return updatedRocas;
  }
}