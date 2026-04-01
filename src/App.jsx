import { Navigate, Route, Routes } from 'react-router-dom';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import DashboardPage from './pages/DashboardPage';
import DevicesPage from './pages/DevicesPage';
import AlertsPage from './pages/AlertsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <div className="center-screen">Vui lòng đăng nhập để tiếp tục.</div>;
  }

  return (
    <Routes>
      <Route element={<AuthenticatedLayout />}>
        <Route path="/" element={<Navigate to="/tong-quan" replace />} />
        <Route path="/tong-quan" element={<DashboardPage />} />
        <Route path="/thiet-bi" element={<DevicesPage />} />
        <Route path="/canh-bao" element={<AlertsPage />} />
        <Route path="/cai-dat" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
