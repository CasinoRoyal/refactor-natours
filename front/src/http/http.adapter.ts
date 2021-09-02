import { Http } from './http';

class HttpAdapter implements Http {
  constructor(private readonly _baseUrl: string) {}

  async getResourse<T>(url: string): Promise<T> {
    const response = await fetch(`${this._baseUrl}/${url}`);

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = response.json();

    return data;
  }

  pushResourse() {}
}

export const http = new HttpAdapter('http://localhost:3000/');