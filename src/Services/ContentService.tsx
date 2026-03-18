import { API } from "../Utils/apis";
import APIService from "./APIService";

export const fetchContentByGenre = async (genre: string) => {
  const res = await APIService.get(API.contentByGenre(genre));
  return res.data.content;
};

export const fetchContentDetails = async (id: string) => {
  const res = await APIService.get(API.contentDetails(id));
  return res.data;
};




