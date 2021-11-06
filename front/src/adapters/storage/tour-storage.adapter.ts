import { http } from '../http/http.adapter';
import { Tour, TourId } from '../../domains/tour.entity';
import { TourStorage } from '../../application/ports/out/tour-storage.port';
import {
  ServerResponse,
  ServerDocsType,
  ServerDocType,
  ErrorMessage,
} from '../../shared-kernel/types';

export function useTourStorage(): TourStorage {
  async function selectAll(): Promise<Tour[] | ErrorMessage> {
    try {
      const response = await http.get<ServerResponse<ServerDocsType<Tour[]>>>(
        '/tours',
      );

      if (response.data.status !== 'success') {
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

      if (response.data.status !== 'success') {
        return response.data.message || 'server error';
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
