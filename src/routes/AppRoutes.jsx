import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loader from '../components/Loader';

const Home = lazy(() => import('../pages/Home'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

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
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}
