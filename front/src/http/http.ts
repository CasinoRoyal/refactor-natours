import axios, { AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
  // baseURL: 'https://natours-adventure.herokuapp.com/api/v1',
  baseURL: 'http://127.0.0.1:3001/api/v1',
  timeout: 4000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
});

export type RequestOptionsType = {
  method: string,
  endPoint: string,
  data?: object,
  config?: object
}

export type httpResponseType<T> = {
  data: AxiosResponse<T>
}

export interface IHttp {
  request: <T>(options: RequestOptionsType) => Promise<T>
}


class Http implements IHttp {
  
  async request<T>(options: RequestOptionsType): Promise<T> {
    const { method, endPoint } = options;

    let res: httpResponseType<T>;

    try {
      switch (method) {
        case 'GET':
          res = await instance.get(`/${endPoint}`);
          break;
        case 'POST':
          res = await instance.post(`/${endPoint}`, options.data)
          break;
        case 'PATCH':
          res = await instance.patch(`/${endPoint}`, options.data)
          break;
        case 'DELETE':
          res = await instance.delete(`/${endPoint}`)
          break;
        default:
          throw new Error('This method not exist');
      }

      return res.data.data;    

    } catch(err) {
        throw err;
    }  
  }
}

export const http = new Http();