import { Peao, Situation } from "@prisma/client"
import { PeaoRepository } from "../repositories/PeaoRepository"




interface PeaoUseCaseRequest{
  name:string
  age:number
  situation: Situation
}

type PeaoUseCaseResponse = Peao

export class PeaoUseCase{

  constructor(private peaoRepository: PeaoRepository){}
  
  async execute({name,age,situation}:PeaoUseCaseRequest):Promise<PeaoUseCaseResponse>{

    
    try{
      if (situation !== Situation.CASA && situation !== Situation.ROCA && situation !== Situation.ELIMINADO) {
        throw new Error('Situação inválida!');
      }

      const createPeao = await this.peaoRepository.create({
        name,
        age,
        situation
      })

      return createPeao

    }catch(err){ 
      console.log(err)
      throw new Error('Erro na criação do Peão');
      
    }
    

    

  }

}