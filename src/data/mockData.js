export const mockSummary = {
  totalDevices: 24,
  onlineDevices: 19,
  alertsOpen: 3,
};

export const mockDevices = [
  { id: 'DV-001', name: 'Cảm biến nhiệt độ kho A', zone: 'Kho A', status: 'online' },
  { id: 'DV-002', name: 'Cảm biến độ ẩm kho A', zone: 'Kho A', status: 'warning' },
  { id: 'DV-003', name: 'Camera cổng chính', zone: 'Cổng chính', status: 'offline' },
];

export const mockAlerts = [
  {
    id: 'AL-1001',
    title: 'Nhiệt độ vượt ngưỡng tại Kho A',
    createdAt: '2026-03-31 10:20',
    status: 'open',
  },
  {
    id: 'AL-1002',
    title: 'Camera cổng chính mất kết nối',
    createdAt: '2026-03-30 22:11',
    status: 'resolved',
  },
];
