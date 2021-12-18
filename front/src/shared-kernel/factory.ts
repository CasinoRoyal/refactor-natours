import { ServerResponse } from './types';
import { http } from '../adapters/http/http.adapter';
import { HttpOptions } from '../application/ports/in/http.port';

export async function createStorageRequest<Res = void, TBody = void>(
  endPoint: string,
  options: HttpOptions<TBody>,
): Promise<Res> {
  try {
    const response = await http<ServerResponse<Res>, TBody>(endPoint, options);

    if (response.data.status !== 'success') {
      throw new Error(response.data.message);
    }

    if ('docs' in response.data.data) {
      return response.data.data.docs;
    }

    if ('doc' in response.data.data) {
      return response.data.data.doc;
    }

    return response.data.data as Res;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Server error');
  }
}
