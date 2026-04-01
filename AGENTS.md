# AGENTS.md

## Mục tiêu dự án
- Giữ code đơn giản, dễ đọc cho sinh viên.
- Ưu tiên chỉnh sửa nhỏ, tránh redesign lớn.
- Không thêm dependency nặng nếu không thật sự cần.

## Quy ước code
- Component đặt tên PascalCase.
- File JS/JSX dùng ESM (`import/export`).
- Ưu tiên tiếng Việt thống nhất cho UI text.
- Tách dữ liệu mock khỏi page vào `src/data/`.

## Quy ước UI
- Trạng thái badge dùng từ điển chung trong `StatusBadge`.
- Mỗi trang chính cần có xử lý loading / empty / error.
- Tối thiểu responsive tại 3 mốc: >1024, <=1024, <=768.

## Khi tích hợp backend
- Không gọi API trực tiếp trong nhiều component trùng lặp.
- Tạo lớp service riêng (ví dụ `src/services/`) khi bắt đầu gọi API thật.
