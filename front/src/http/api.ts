import { IHttp, RequestOptionsType, http } from './http';
// import { cachedHttp } from './proxy';

class Api {
  private http: IHttp;
  
  constructor(http: IHttp) {
    this.http = http;
  }

  async request<T>(options: RequestOptionsType): Promise<T> {
    return await this.http.request(options)
  }
}


// export const api = new Api(cachedHttp);
export const api = new Api(http);