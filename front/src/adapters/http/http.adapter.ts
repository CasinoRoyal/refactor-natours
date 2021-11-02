import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Http, HttpResponse } from '../../application/ports/in/http.port';

class HttpAdapter implements Http {
  private readonly _http: AxiosInstance;

  constructor(private readonly _baseUrl: string) {
    this._http = axios.create({ baseURL: this._baseUrl });
  }

  async get<T>(endPoint: string): Promise<HttpResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this._http.get(`${endPoint}`);

      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }

      return response;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  }

  async post<Opt, TRes>(
    endPoint: string,
    options: Opt,
  ): Promise<HttpResponse<TRes>> {
    try {
      const response = await this._http.post(`${endPoint}`, options);

      if (response.status !== 200) {
        throw new Error('Something went wrong');
      }

      return response;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  }

  async delete(endPoint: string): Promise<boolean> {
    try {
      const response = await this._http.delete(`${endPoint}`);

      return response.status === 200;
    } catch (e) {
      throw new Error('Something went wrong');
    }
  }
}

const tempBaseUrl = 'http://localhost:3001/api/v1';

export const http = new HttpAdapter(tempBaseUrl);
