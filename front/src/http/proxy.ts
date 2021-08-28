import { http, IHttp, RequestOptionsType } from './http';

interface ICachedResponse {
  data: any;
  request: {method: string, endPoint: string};
}

class CachedHttp implements IHttp {
  private http: IHttp;
  private cachedResponse: ICachedResponse[] = [];
  
  constructor(http: IHttp) {
    this.http = http;
  }

  async request<T>(options: RequestOptionsType): Promise<T> {
    const { method: userMethod, endPoint: userEndPoint } = options;
    
    const cache = this.cachedResponse.find(({ request }) => {
      return(
       (request.method ===userMethod) && (request.endPoint ===userEndPoint)
      );
    });
    
    console.log('[CACHED]: ', cache);
    
    if (cache) {
      console.log('Used cache!');
      return Promise.resolve(cache.data);
    }

    try {
    
      const res:T = await this.http.request<T>(options);
      console.log('Start cache');

      this.cachedResponse.push({
        data: res, 
        request: { 
          method: userMethod, 
          endPoint: userEndPoint 
        } 
      });

      console.log('Cached!');
      
      return res;
    
    } catch(err) {
        throw err;
    }
  };
}

export const cachedHttp = new CachedHttp(http);