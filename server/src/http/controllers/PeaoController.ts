import { FastifyReply, FastifyRequest } from "fastify";
import { number, z } from "zod";
import { CreatePeaoFactory, UpdatePeaoFactory } from "../../use-cases/factory/PeaoFactory";


enum Situation {
  CASA = 'CASA',
  ROCA = 'ROCA',
  ELIMINADO = 'ELIMINADO',
}

export async function CreatePeaoControlle(request: FastifyRequest, reply: FastifyReply){

  const createBodySchema = z.object({
    name: z.string(),
    age: z.number(),
    image: z.string(),
    situation: z.nativeEnum(Situation),
  })

  const {name,age,image, situation } = createBodySchema.parse(request.body)

 

  try{
    const createPeaoUseCase = CreatePeaoFactory();

    const newPeao = await createPeaoUseCase.execute({name, age, image, situation})

    return reply.status(201).send(newPeao);

  }catch(err){
    
    console.error(err)
    return reply.status(500).send()
  }

}
export async function UpdatePeaoController(request: FastifyRequest, reply: FastifyReply){

  const createBodySchema = z.object({
    id:number(),
    situation: z.nativeEnum(Situation),
  })

  const {id, situation } = createBodySchema.parse(request.body)

 

  try{
    const updatePeaoUseCase = UpdatePeaoFactory();

    const updatedPeao = await updatePeaoUseCase.execute({id,situation})

    return reply.status(200).send(updatedPeao);

  }catch(err){
    
    console.error(err)
    return reply.status(500).send()
  }

}