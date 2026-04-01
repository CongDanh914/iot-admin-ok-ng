# Mock Data Structure

## `mockSummary`
```js
{
  totalDevices: number,
  onlineDevices: number,
  alertsOpen: number
}
```

## `mockDevices`
```js
[
  {
    id: string,        // Ví dụ: DV-001
    name: string,      // Tên thiết bị
    zone: string,      // Khu vực
    status: 'online' | 'warning' | 'offline'
  }
]
```

## `mockAlerts`
```js
[
  {
    id: string,        // Ví dụ: AL-1001
    title: string,
    createdAt: string, // Định dạng tạm: YYYY-MM-DD HH:mm
    status: 'open' | 'resolved'
  }
]
```

## Mapping trạng thái badge
- `online` => Hoạt động
- `warning` => Cảnh báo
- `offline` => Mất kết nối
- `open` => Đang mở
- `resolved` => Đã xử lý
