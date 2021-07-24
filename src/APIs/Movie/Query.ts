import axios from "axios";

interface MovieGroupRequest {
  query: string;
}

interface MovieResponse {
  d?: MovieDetails[];
}

export interface MovieDetails {
  i?: {
    imageUrl: string;
  };
  l: string;
  s: string;
}

export const MovieGroupFetch = async (data: MovieGroupRequest) => {
  try {
    if (data.query) {
      const response = await axios.get<MovieResponse>(
        `https://imdb8.p.rapidapi.com/auto-complete/`,
        {
          headers: {
            "x-rapidapi-key":
              "a76c84d4b1msh17e93f060a0ddc0p14d487jsn12f74717aed9",
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
          },
          params: { q: data.query },
        }
      );
      console.log(response);

      return response.data.d;
    }
  } catch (error) {
    console.log("Error occurred while sending request!", error);
  }
};
