import { fastify } from "fastify";

const server = fastify();

server.listen({ port: 8080 }).then(() => {
  console.log("Server http running ");
});
