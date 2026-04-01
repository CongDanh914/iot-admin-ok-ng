# IoT Admin OK NG (Frontend)

Frontend dashboard demo cho bài tập quản trị IoT.

## 1) Cài đặt và chạy

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ Vite hiển thị (thường là `http://localhost:5173`).

### Build production

```bash
npm run build
npm run preview
```

## 2) Trạng thái handoff hiện tại

### Hoàn thành
- Khung layout xác thực với sidebar + vùng nội dung.
- Route chính hoạt động:
  - `/tong-quan`
  - `/thiet-bi`
  - `/canh-bao`
  - `/cai-dat`
- Có trang 404 và điều hướng từ `/` về `/tong-quan`.
- Chuẩn hóa nhãn tiếng Việt và badge trạng thái.
- Có state cơ bản cho loading / empty / error ở các trang chính.
- Responsive cho 3 mốc phổ biến: desktop, tablet, mobile.

### Còn mock-only
- Dữ liệu thiết bị, cảnh báo, thống kê đang lấy từ `src/data/mockData.js`.
- Chưa có đăng nhập thật (`isAuthenticated` đang hardcode).
- Chưa có API fetch, retry, pagination/filter/sort.

### Backend endpoints cần có tiếp theo
1. `POST /api/auth/login`
2. `GET /api/dashboard/summary`
3. `GET /api/devices`
4. `GET /api/alerts`
5. `PATCH /api/alerts/:id/resolve`
6. `GET /api/settings`
7. `PUT /api/settings`

> Gợi ý: chuẩn hóa response dạng `{ data, meta, error }` để frontend dễ xử lý state.

## 3) Cấu trúc dự án

- `src/layouts/`: layout dùng chung cho route đã xác thực.
- `src/pages/`: page-level components.
- `src/components/`: component tái sử dụng (sidebar, badge, page state).
- `src/data/`: mock data dùng cho demo.

Xem thêm mock data schema tại `src/data/README.md`.
