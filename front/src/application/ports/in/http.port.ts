type HttpBody<T> = Record<string, T>;
export type HttpOptions<T> = {
  method: HttpMethod;
  body?: HttpBody<T>;
  [key: string]: any;
};

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export type HttpResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  [key: string]: any;
};

export interface Http {
  http<TRes, TBody = void>(
    endPoint: string,
    options: HttpOptions<TBody>,
  ): Promise<HttpResponse<TRes>>;
}
