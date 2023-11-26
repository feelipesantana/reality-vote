import { FastifyInstance } from "fastify";
import { CreatePeaoControlle } from "./controllers/PeaoController";

export async function appRoutes(app: FastifyInstance){
  app.post("/peao", CreatePeaoControlle)
}