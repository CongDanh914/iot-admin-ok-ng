import StatusBadge from '../components/StatusBadge';
import PageState from '../components/PageState';
import { mockDevices } from '../data/mockData';

function DevicesPage() {
  const isLoading = false;
  const isError = false;

  if (isLoading) {
    return <PageState type="loading" title="Đang tải thiết bị" message="Vui lòng chờ trong giây lát..." />;
  }

  if (isError) {
    return <PageState type="error" title="Tải thiết bị thất bại" message="Hãy thử làm mới trang." />;
  }

  if (mockDevices.length === 0) {
    return <PageState type="empty" title="Chưa có thiết bị" message="Thêm thiết bị để bắt đầu giám sát." />;
  }

  return (
    <section>
      <h2>Danh sách thiết bị</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Mã</th>
              <th>Tên thiết bị</th>
              <th>Khu vực</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {mockDevices.map((device) => (
              <tr key={device.id}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.zone}</td>
                <td>
                  <StatusBadge status={device.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default DevicesPage;
