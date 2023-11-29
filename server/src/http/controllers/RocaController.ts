import { FastifyReply, FastifyRequest } from "fastify";
import { CreateRocaFactory, FindRocasFactory } from "../../use-cases/factory/RocaFactory";

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

export async function FindRocasController(request: FastifyRequest, reply: FastifyReply){
  try{
    const findRocasFactory = FindRocasFactory();

    const findRocas = await findRocasFactory.execute()

    return reply.status(200).send(findRocas);

  }catch(err){
    
    console.error(err)
    return reply.status(500).send()
  }
}