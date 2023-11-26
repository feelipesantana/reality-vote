import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PeaoFactory } from "../../use-cases/factory/PeaoFactory";


enum Situation {
  CASA = 'CASA',
  ROCA = 'ROCA',
  ELIMINADO = 'ELIMINADO',
}

export async function CreatePeaoControlle(request: FastifyRequest, reply: FastifyReply){

  const createBodySchema = z.object({
    name: z.string(),
    age: z.number(),
    situation: z.nativeEnum(Situation),
  })

  const {name,age,situation } = createBodySchema.parse(request.body)

 

  try{
    const createPeaoUseCase = PeaoFactory();

    const newPeao = await createPeaoUseCase.execute({name, age, situation})

    return reply.status(201).send(newPeao);

  }catch(err){
    
    console.error(err)
    return reply.status(500).send()
  }

}