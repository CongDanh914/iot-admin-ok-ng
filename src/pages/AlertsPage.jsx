import StatusBadge from '../components/StatusBadge';
import PageState from '../components/PageState';
import { mockAlerts } from '../data/mockData';

function AlertsPage() {
  const isLoading = false;

  if (isLoading) {
    return <PageState type="loading" title="Đang tải cảnh báo" message="Hệ thống đang tổng hợp sự kiện..." />;
  }

  if (mockAlerts.length === 0) {
    return <PageState type="empty" title="Không có cảnh báo" message="Mọi thứ đang ổn định." />;
  }

  return (
    <section>
      <h2>Danh sách cảnh báo</h2>
      <ul className="list-stack">
        {mockAlerts.map((alert) => (
          <li key={alert.id} className="card row-between">
            <div>
              <p className="card-label">{alert.id}</p>
              <p>{alert.title}</p>
              <p className="muted">Phát hiện lúc: {alert.createdAt}</p>
            </div>
            <StatusBadge status={alert.status} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlertsPage;
