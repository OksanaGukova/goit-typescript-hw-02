import axios from "axios";
import { UnsplashResponse } from "../components/App/App.types";

const API_KEY = "6OVPiijRuka372LDYVcjSjmYwjsLE4UvOb-6PSTFJFk";
const BASE_URL = "https://api.unsplash.com/search/photos";

const options = {
  headers: { Authorization: `Client-ID ${API_KEY}` },
};

export const fetchImages = async (
  query: string ,
  currentPage: number
): Promise<UnsplashResponse> => {
  const searchParams = new URLSearchParams({
    query,
    page: `${currentPage}`,
    per_page: "20",
  });

  const response = await axios(`${BASE_URL}?${searchParams}`, options);
  return response.data;
}