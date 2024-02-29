# Bài tập chuyên đề Docker

## Mục tiêu

1. Tạo Dockerfile để build image cho ứng dụng web express
2. Tạo docker-compose.yml để chạy ứng dụng web express và database mongodb

## Hướng dẫn

1. Tạo Dockerfile để build image cho ứng dụng web express

   - Tạo file `Dockerfile` trong thư mục gốc
   - Sử dụng image `node:18` làm base image
   - Sao chép tất cả các file trong thư mục gốc vào thư mục `/app` trong image
   - Chạy lệnh `npm install` để cài đặt các package
   - Expose cổng `3000`
   - Chạy lệnh `npm start` khi khởi động container

2. Tạo docker-compose.yml để chạy ứng dụng web express và database mongodb

   - Tạo file `docker-compose.yml` trong thư mục gốc
   - Sử dụng image `mongo` để tạo service `mongodb`
   - Sử dụng image đã build ở bước 1 để tạo service `web`
   - Kết nối service `web` với service `mongodb` thông qua mạng `bridge`
   - Expose cổng `3000` của service `web` ra cổng `3000` của máy host
   - Cung cấp biến môi trường `PORT` và `MONGODB_URI` cho service `web` để kết nối tới `mongodb`
