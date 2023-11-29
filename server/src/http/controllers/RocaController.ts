import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRocaFactory } from "../../use-cases/factory/RocaFactory";

export async function CreateRocaController(request: FastifyRequest, reply: FastifyReply){
  try{
    const createRocaUseCase = CreateRocaFactory();

    const newRoca = await createRocaUseCase.execute()

    return reply.status(201).send(newRoca);

  }catch(err){
    
    console.error(err)
    return reply.status(500).send()
  }
}