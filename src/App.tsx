import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const NotFound = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

import './style.scss';

import { ROUTES } from './routes/routes';

const App: React.FC = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path={ROUTES.home} element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
