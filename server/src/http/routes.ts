import { FastifyInstance } from "fastify";
import { CreatePeaoControlle,UpdatePeaoController } from "./controllers/PeaoController";

export async function appRoutes(app: FastifyInstance){
  app.post("/peao", CreatePeaoControlle)
  app.post("/update/peao", UpdatePeaoController)
}