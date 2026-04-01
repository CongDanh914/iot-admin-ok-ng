import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Tổng quan', to: '/tong-quan' },
  { label: 'Thiết bị', to: '/thiet-bi' },
  { label: 'Cảnh báo', to: '/canh-bao' },
  { label: 'Cài đặt', to: '/cai-dat' },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h1 className="brand">IoT Admin</h1>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
