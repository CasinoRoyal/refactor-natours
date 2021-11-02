import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './ui/router/router';
import { Header } from './ui/components/header';
import { Footer } from './ui/components/footer';
import { store } from './adapters/store/store';

export function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <AppRouter />

        <Footer />
      </Router>
    </Provider>
  );
}
