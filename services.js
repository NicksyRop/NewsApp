import { API_KEY, country, endpoint } from "./config/confi";

export async function services(category = "general") {
  try {
    const response = await fetch(
      `${endpoint}?country=${country}&category=${category}&apiKey=${API_KEY}`
    );
    const json = await response.json();
    return json.articles;
  } catch (error) {
    console.error(error);
  }
}
