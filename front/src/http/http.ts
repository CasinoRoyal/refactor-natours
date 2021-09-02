type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export type Options<B> = {
  method: HttpMethod;
  body: B;
};

export interface Http {
  getResourse<T>(url: string): Promise<T>;
  pushResourse(): void
  //pushResourse<T, B>(url: string, options: Options<B>): Promise<T>;
}