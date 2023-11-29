import {  Roca } from "@prisma/client"
import { RocaRepository } from "../repositories/RocaRepository"

type RocaUseCaseResponse = Roca
export class CreateRocaUseCase{

  constructor(private rocaRepository: RocaRepository){}
  
  async execute():Promise<RocaUseCaseResponse>{
    try{
      const newRoca = await this.rocaRepository.findByIsOpen()

      if(newRoca){
        await this.rocaRepository.updateIsOpen()
      }
      
      const createPeao = await this.rocaRepository.create()
      return createPeao

    }catch(err){ 
      console.log(err)
      throw new Error('Erro na criação do Peão');
      
    }
  }
  

}