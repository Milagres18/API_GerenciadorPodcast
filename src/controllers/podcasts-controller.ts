// Criando um controller para retornar episodios de podcasts
import { IncomingMessage, request, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(StatusCode.OK, { "Content-type": ContentType.JSON });
  response.end(
    // serve para converter o json em texto
    JSON.stringify(content)
  );
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {

  const content = await serviceFilterEpisodes(request.url);

  response.writeHead(StatusCode.OK, { "content-Type": ContentType.JSON });
  response.end(JSON.stringify(content));
};
