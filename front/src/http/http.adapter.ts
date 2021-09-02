import { Http } from './http';

// TODO: REFACTOR HTTP METHODS

class HttpAdapter implements Http {
  constructor(private readonly _baseUrl: string) {}

  async getResourse<T>(endPoint: string): Promise<T> {
    const response = await fetch(`${this._baseUrl}/${endPoint}`);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = response.json();

    return data;
  }

  async pushResourse<T, B>(endPoint: string, options: B): Promise<T> {
    const response = await fetch(`${this._baseUrl}/${endPoint}`, options);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = response.json()

    return data;
  }
}

export const http = new HttpAdapter('http://localhost:3000/');