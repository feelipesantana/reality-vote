
import Fastify from "fastify"
import { appRoutes } from "./http/routes";
import cors from '@fastify/cors'

export const  app = Fastify();
 

app.register(cors,{
  origin: 'http://127.0.0.1:3000'
})
app.register(appRoutes)

app.listen({
  host:"0.0.0.0",
  port: 3333
}).then(() =>{
  console.log("🚀 Server ready")
})
