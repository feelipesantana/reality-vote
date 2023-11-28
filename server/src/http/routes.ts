import { FastifyInstance } from "fastify";
import { CreatePeaoControlle,FindManyPeoesConroller,UpdatePeaoController } from "./controllers/PeaoController";

export async function appRoutes(app: FastifyInstance){
  app.post("/peao", CreatePeaoControlle)
  app.get("/peao", FindManyPeoesConroller)

  app.post("/update/peao", UpdatePeaoController)
}