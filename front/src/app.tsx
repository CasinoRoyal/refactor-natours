import { ReactElement, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import { AppRouter } from './ui/router/router';
import { Header } from './ui/components/header';
import { Footer } from './ui/components/footer';
import { Loader } from './ui/elements/loader';
import { authContext } from './ui/context/auth';
import './app.css';
import 'react-toastify/dist/ReactToastify.css';

export function App(): ReactElement {
  const { isLoading, error } = useContext(authContext);

  if (isLoading && !error) return <Loader />;

  return (
    <>
      <ToastContainer />
      <Header />
      <main className="main">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}
