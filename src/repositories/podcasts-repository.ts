import fs from "fs";
import path from "path";
import { podcastModel } from "../models/podcastModel";
import { json } from "stream/consumers";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repoPodcast = async (
  podcastName?: string
): Promise<podcastModel[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: podcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
