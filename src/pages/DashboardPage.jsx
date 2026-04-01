import { mockSummary } from '../data/mockData';

function DashboardPage() {
  const cards = [
    { label: 'Tổng thiết bị', value: mockSummary.totalDevices },
    { label: 'Thiết bị hoạt động', value: mockSummary.onlineDevices },
    { label: 'Cảnh báo đang mở', value: mockSummary.alertsOpen },
  ];

  return (
    <section>
      <h2>Tổng quan hệ thống</h2>
      <p className="muted">Dữ liệu demo cho buổi handoff frontend.</p>
      <div className="card-grid">
        {cards.map((card) => (
          <article key={card.label} className="card">
            <p className="card-label">{card.label}</p>
            <p className="card-value">{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DashboardPage;
