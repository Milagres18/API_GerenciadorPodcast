// Criando o server HTTP
import * as http from "http"; //importando o modulo http

import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(request, response);
    }
  }
); //Definir que ele só vai se comunicar por request e response

const port = process.env.PORT;

server.listen(port, () => {
  // Definimos a conexão de uma porta no nosso servidor
  console.log(`servidor iniciado na porta ${port}`);
});
