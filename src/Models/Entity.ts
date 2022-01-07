export interface Entity {
  id: number;
}

export interface ErrorResponse {
  response: Data;
}

export interface Data {
  data: Error;
}

export interface Error {
  message: string;
}
