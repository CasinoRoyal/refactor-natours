import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { Http, HttpResponse } from '../../application/ports/in/http.port';

function isAxiosError<T>(err: any): err is AxiosError<T> {
  return err.response !== undefined;
}

class HttpAdapter implements Http {
  private readonly _http: AxiosInstance;

  constructor(private readonly _baseUrl: string) {
    this._http = axios.create({
      baseURL: this._baseUrl,
      withCredentials: true,
    });
  }

  async get<TRes>(endPoint: string): Promise<HttpResponse<TRes>> {
    try {
      const response: AxiosResponse<TRes> = await this._http.get(`${endPoint}`);
      return response;
    } catch (e) {
      if (isAxiosError<TRes>(e)) {
        if (e.response)
          return {
            data: e.response.data,
            status: e.response.status,
            statusText: e.response.statusText,
            headers: e.response.headers,
          };
      }

      throw new Error('Server error');
    }
  }

  async post<Opt, TRes>(
    endPoint: string,
    options: Opt,
  ): Promise<HttpResponse<TRes>> {
    try {
      const response: AxiosResponse<TRes> = await this._http.post(
        `${endPoint}`,
        options,
      );
      return response;
    } catch (e) {
      if (isAxiosError<TRes>(e)) {
        if (e.response)
          return {
            data: e.response.data,
            status: e.response.status,
            statusText: e.response.statusText,
            headers: e.response.headers,
          };
      }

      throw new Error('Server error');
    }
  }

  async delete(endPoint: string): Promise<boolean> {
    try {
      const response = await this._http.delete(`${endPoint}`);

      return response.status === (200 || 204);
    } catch (e) {
      throw new Error('Something went wrong');
    }
  }
}

const tempBaseUrl = 'http://localhost:3001/api/v1';

export const http = new HttpAdapter(tempBaseUrl);
