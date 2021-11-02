import { http } from '../http/http.adapter';
import {
  ITourStorage,
  ErrorMessage,
} from '../../application/ports/out/tour-storage.port';
import { Tour, TourId } from '../../domains/tour.entity';

type ServerDocsType<T> = {
  docs: T;
};

type ServerDocType<T> = {
  doc: T;
};

type SuccessResponse<T> = {
  status: 'success';
  data: T;
  [key: string]: unknown;
};

type FailureResponse = {
  status: 'error';
  message: ErrorMessage;
};

export type ServerResponse<T> = SuccessResponse<T> | FailureResponse;

export function useTourStorage(): ITourStorage {
  async function selectAll(): Promise<Tour[] | ErrorMessage> {
    try {
      const response = await http.get<ServerResponse<ServerDocsType<Tour[]>>>(
        '/tours',
      );

      if (response.data.status === 'error') {
        return response.data.message || 'server error';
      }
      return response.data.data.docs;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  async function selectOne(tourId: TourId): Promise<Tour | ErrorMessage> {
    try {
      const response = await http.get<ServerResponse<ServerDocType<Tour>>>(
        `/tours/${tourId}`,
      );

      if (response.data.status === 'error') {
        return response.data.message || 'tour not found';
      }

      return response.data.data.doc;
    } catch (err) {
      if (err instanceof Error) {
        return err.message as ErrorMessage;
      }
      return 'Server Error';
    }
  }

  return {
    selectAll,
    selectOne,
  };
}
