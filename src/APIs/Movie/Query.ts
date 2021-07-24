import axios from "axios";

interface MovieGroupRequest {
  query: string;
}

interface MovieResponse {
  d: MovieDetails[];
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
              "84e84770b9msh59a96d8b03cb4aap1615a1jsn1cd0efaeedfe",
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
