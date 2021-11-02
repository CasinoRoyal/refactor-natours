//type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
type HttpBody<T> = Record<string, T>;
type HttpOptions<B> = {
  body: HttpBody<B>;
  [key: string]: any;
};
export type HttpResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  [key: string]: any;
};

export interface Http {
  get<T>(endPoint: string): Promise<HttpResponse<T>>;
  post<Opt, TRes>(
    endPoint: string,
    options: HttpOptions<Opt>,
  ): Promise<HttpResponse<TRes>>;
  delete(endPoint: string): Promise<boolean>;
}
