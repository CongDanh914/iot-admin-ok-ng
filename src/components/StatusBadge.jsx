const statusConfig = {
  online: { label: 'Hoạt động', className: 'success' },
  warning: { label: 'Cảnh báo', className: 'warning' },
  offline: { label: 'Mất kết nối', className: 'danger' },
  resolved: { label: 'Đã xử lý', className: 'neutral' },
  open: { label: 'Đang mở', className: 'danger' },
};

function StatusBadge({ status }) {
  const config = statusConfig[status] ?? { label: 'Không xác định', className: 'neutral' };

  return <span className={`badge ${config.className}`}>{config.label}</span>;
}

export default StatusBadge;
