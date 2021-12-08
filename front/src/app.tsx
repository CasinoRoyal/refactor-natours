import { ReactElement, useEffect } from 'react';
import { AppRouter } from './ui/router/router';
import { Header } from './ui/components/header';
import { Footer } from './ui/components/footer';
import { Loader } from './ui/elements/loader';
import { checkUser } from './ui/store/user.reducer';
import { useAppSelector, useAppDispatch, selectUser } from './ui/store/store';

export function App(): ReactElement {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Header />
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}
