import { ReactElement, useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './ui/router/router';
import { Header } from './ui/components/header';
import { Footer } from './ui/components/footer';
import { store, dispatch } from './ui/store/store';
import { checkUser } from './ui/store/user.reducer';

export function App(): ReactElement {
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="main">
          <AppRouter />
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}
