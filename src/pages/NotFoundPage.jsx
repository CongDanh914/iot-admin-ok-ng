import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="center-screen">
      <div>
        <h2>404 - Không tìm thấy trang</h2>
        <Link to="/tong-quan">Quay về trang tổng quan</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
