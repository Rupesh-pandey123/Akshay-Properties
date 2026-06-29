import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';

const Home = lazy(() => import('../pages/Home'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader isLoading />}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
