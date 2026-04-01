import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function AuthenticatedLayout() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthenticatedLayout;
