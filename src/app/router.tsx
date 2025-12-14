import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import HomePage from '../pages/Home/HomePage';
import MenuListPage from '../pages/Menu/MenuListPage';
import MenuDetailPage from '../pages/Menu/MenuDetailPage';
import DirectionsPage from '../pages/Directions/DirectionsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="menu" element={<MenuListPage />} />
      <Route path="menu/:id" element={<MenuDetailPage />} />
      <Route path="directions" element={<DirectionsPage />} />
    </Route>,
  ),
  { basename: import.meta.env.BASE_URL },
);

export default router;
