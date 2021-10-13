type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export type Options<B> = {
  method: HttpMethod;
  body: B;
};

export interface Http {
  getResourse<T>(endPoint: string): Promise<T>;
  pushResourse<T, B>(endPoint: string, options: Options<B>): Promise<T>;
}