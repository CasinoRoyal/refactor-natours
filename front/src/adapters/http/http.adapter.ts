import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import {
  Http,
  HttpResponse,
  HttpOptions,
} from '../../application/ports/in/http.port';

function isAxiosError<T>(err: any): err is AxiosError<T> {
  return err.response !== undefined;
}

function httpFactory(baseURL: string): Http {
  const instance: AxiosInstance = axios.create({
    baseURL: baseURL,
  });

  async function http<TRes, TBody = Record<string, unknown>>(
    endPoint: string,
    options: HttpOptions<TBody>,
  ): Promise<HttpResponse<TRes>> {
    try {
      const response: AxiosResponse<TRes> = await instance(endPoint, {
        ...options,
      });
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

  return {
    http,
  };
}

const baseUrl = process.env['REACT_APP_BASE_URL'] as string;
export const { http } = httpFactory(baseUrl);
