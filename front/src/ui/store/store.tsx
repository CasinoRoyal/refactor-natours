import { ReactElement, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export function StoreProvider(props: PropsWithChildren<unknown>): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
