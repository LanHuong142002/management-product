import useSWR from 'swr';

// Constants
import { URL_API } from '@constants';

// Services
import { getStatuses } from '@services';

// Interfaces
import { ProductStatus } from '@interfaces';

interface Error {
  message: string;
}

interface ReturnType {
  isLoading: boolean;
  error?: Error;
  data?: ProductStatus[];
}

export const useStatus = (): ReturnType => {
  const { data, error, isLoading } = useSWR<ProductStatus[]>(
    `${URL_API.BASE_URL}${URL_API.STATUSES}`,
    getStatuses,
  );

  return {
    data,
    error,
    isLoading,
  };
};
