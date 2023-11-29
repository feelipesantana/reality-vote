import {  Roca } from "@prisma/client"
import { RocaRepository } from "../repositories/RocaRepository"

type RocaUseCaseResponse = Roca[]
export class FindRocasUseCase{

  constructor(private rocaRepository: RocaRepository){}
  
  async execute():Promise<RocaUseCaseResponse>{
    try{
      const findRocas = await this.rocaRepository.findMany()

      if (!findRocas) {
        throw new Error("Rocas not found");
      }

      return findRocas

    }catch(err){ 
      console.log(err)
      throw new Error('Erro na criação do Peão');
      
    }
  }
  

}