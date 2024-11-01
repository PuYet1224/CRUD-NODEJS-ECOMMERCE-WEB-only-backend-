# CRUD Node.js Ecommerce Web
## Mô tả
Dự án này là một ứng dụng backend cơ bản cho một hệ thống thương mại điện tử nhỏ, hỗ trợ các thao tác CRUD (Create, Read, Update, Delete) cho sản phẩm. Dự án được xây dựng bằng Node.js và Express, sử dụng MongoDB làm cơ sở dữ liệu. Mục đích chính là thực hiện các chức năng CRUD để nộp hồ sơ cho vị trí intern.

## Cài đặt
### Yêu cầu hệ thống
Node.js v14+
MongoDB
### Hướng dẫn cài đặt
1. **Clone repository**:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name


2. **Cài đặt các package cần thiết**:
    npm install


3. **Cấu hình môi trường**:
# .env
DEV_DB_HOST=localhost
DEV_DB_PORT=27017
DEV_DB_NAME=SEcommerceDev
DEV_APP_PORT=3055


4. **Chạy**:
npm start
or
node --watch server.js

# Ứng dụng sẽ chạy tại http://localhost:3055

**API Endpoints**
# Tất cả các endpoint dưới đây được bảo mật cơ bản bằng API Key.
## Tạo sản phẩm
### URL: /v1/api/product/create
### Phương thức: POST
### Payload (raw trên postman)
{
  "name": "Product A",
  "description": "Description of Product A",
  "price": 99.99,
  "category": "electronics",
  "quantity": 10,
  "status": "available",
  "images": [
    {
      "url": "https://example.com/image1.jpg",
      "alt": "Product image"
    }
  ]
}
# Phản hồi: Trả về thông tin sản phẩm vừa tạo.


## Xem sản phẩm theo tên
### URL: /v1/api/product/read/Product%20A ( khoảng trắng thay bằng %20 ghi liền)
### Phương thức: POST
### Tham số: name (Tên sản phẩm cần tìm kiếm)
### Phản hồi: Trả về chi tiết sản phẩm.


## Cập nhật sản phẩm theo tên
### URL: /v1/api/product/update/Product%20A
### Phương thức: POST
### Payload (raw trên postman)
{
  "price": 89.99,
  "quantity": 15
}
### Phản hồi: Trả về thông tin sản phẩm đã được cập nhật.


## Xóa sản phẩm theo tên
### URL: /v1/api/product/delete/Product%20A
### Phương thức: POST
### Phản hồi: Trả về thông báo xóa thành công.


**Cấu trúc thư mục**
project_root/
│
├── src/
│   ├── auth/
│   │   └── checkAuth.js             # Middleware kiểm tra xác thực
│   ├── configs/
│   │   └── config.mongodb.js        # Cấu hình MongoDB
│   ├── controllers/
│   │   └── product.controller.js    # Xử lý logic CRUD cho sản phẩm
│   ├── core/
│   │   ├── error.response.js        # Định nghĩa lỗi
│   │   └── success.response.js      # Định nghĩa phản hồi thành công
│   ├── dbs/
│   │   └── init.mongodb.js          # Khởi tạo kết nối MongoDB
│   ├── helpers/
│   │   ├── asyncHandler.js          # Xử lý async errors
│   │   └── check.connect.js         # Giám sát kết nối MongoDB
│   ├── models/
│   │   └── product.model.js         # Mô hình dữ liệu sản phẩm
│   ├── routes/
│   │   └── product/index.js         # Định nghĩa các routes CRUD
│   ├── services/
│   │   └── product.service.js       # Service xử lý CRUD sản phẩm
│   ├── app.js                       # Cấu hình Express, middleware, routes chính
│   └── server.js                    # Khởi động server
│
├── .env                             # Biến môi trường
├── .gitignore                       # Tệp gitignore
├── package.json                     # Định nghĩa dependencies
└── README.md                        # Hướng dẫn dự án



**Ghi chú**
Không có yêu cầu authentication với người dùng, vì ứng dụng này tập trung vào chức năng CRUD cơ bản, không có đăng ký, đăng nhập và bảo mật 2 loại token (Accesstoken và Refreshtoken).
