import { Peao, Situation } from "@prisma/client";
import { PeaoRepository } from "../repositories/PeaoRepository";

interface UpdatePeaoUseCaseRequest{
  id:number
  situation:Situation

}

type UpdatePeaoUseCaseResponse = Peao
export class UpdatePeaoUseCase{

  constructor(private peaoRepository: PeaoRepository){}
  
  async execute({id,situation}:UpdatePeaoUseCaseRequest):Promise<UpdatePeaoUseCaseResponse>{

    try{
    const updatePeao = await this.peaoRepository.update(id,situation);

    return updatePeao
    }catch(err){
      console.log(err)
      throw new Error('Erro na Atualização do Peão');
    }
  }
}