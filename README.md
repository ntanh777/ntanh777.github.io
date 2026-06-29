# Website Tĩnh Giới Thiệu App/Game & Developer (Tương thích AdMob & Stores)

Chào mừng bạn đến với dự án portfolio cá nhân. Đây là một website tĩnh được thiết kế bởi lập trình viên có kinh nghiệm, nhằm mục đích tối ưu hóa hiệu năng, đạt chuẩn SEO, hỗ trợ đa chế độ giao diện (Sáng/Tối dịu mắt), và đặc biệt đáp ứng đầy đủ yêu cầu kiểm duyệt/xác thực của **Google AdMob, Google Play Store** và **Apple App Store**.

---

## 🌟 Tính Năng Nổi Bật

1. **Dữ liệu tập trung (Single-source of truth):** Tất cả nội dung trang web (Logo, tên dev, email, danh sách ứng dụng, chính sách bảo mật...) đều nằm trong duy nhất tệp `js/config.js`. Bạn không cần chỉnh sửa code HTML/CSS để thay đổi thông tin.
2. **Bộ định tuyến Chính sách bảo mật động (Hash Router):** Thay vì phải tạo hàng chục trang HTML phụ cho mỗi ứng dụng, hệ thống sử dụng Router Hash động. Bạn chỉ cần điền link chính sách bảo mật trên Play Store dạng:  
   `https://[username].github.io/[repo-name]/#privacy/[app-id]`  
   Hệ thống sẽ tự động hiển thị trang Chính sách bảo mật tương ứng của ứng dụng đó ngay lập tức. Đạt tiêu chuẩn kiểm duyệt 100% của Google & Apple.
3. **Responsive & Eye-Friendly UI:** Giao diện co giãn hoàn hảo trên thiết bị di động, tablet, máy tính. Chế độ Dark mode êm dịu giúp chống mỏi mắt.
4. **Mã nguồn thuần siêu nhẹ:** Không sử dụng các framework cồng kềnh (React, Flutter Web, Angular...), tải trang trong mili-giây, rất thân thiện với robot quét của Google/AdMob.

---

## 📁 Cấu Trúc Thư Mục Chuẩn

```text
website_github/
├── index.html                  # Khung sườn giao diện chính (SEO optimized)
├── app-ads.txt                 # File khai báo AdMob (Bạn tự thêm nội dung của bạn vào đây)
├── README.md                   # Tài liệu hướng dẫn sử dụng (Tệp này)
├── css/
│   └── styles.css              # Hệ thống style hiện đại (Biến màu CSS, hiệu ứng, dark/light)
└── js/
    ├── config.js               # NƠI TẬP TRUNG DỮ LIỆU (Cần chỉnh sửa nội dung ở đây)
    └── main.js                 # Bộ não xử lý logic (Lọc app, modal, định tuyến hash, theme toggle)
```

---

## 🛠️ Hướng Dẫn Chỉnh Sửa & Cập Nhật

Mọi việc chỉnh sửa đều diễn ra tại tệp [js/config.js](file:///f:/Project/website_github/js/config.js). Bạn hãy mở file này lên và làm theo hướng dẫn dưới đây:

### 1. Thay đổi thông tin cá nhân & Logo
Tìm phần `developer` ở đầu file `config.js`:
- **Tên & Chức danh:** Sửa lại thuộc tính `name` và `title`.
- **Email & Địa chỉ:** Sửa lại thuộc tính `email` (email này sẽ được liên kết trực tiếp vào form hỗ trợ kỹ thuật) và `address`.
- **Tải lên Logo cá nhân:**
  * **Cách 1 (Khuyên dùng):** Copy tệp ảnh logo của bạn (ví dụ `my-logo.png` hoặc `logo.svg`) vào thư mục dự án. Sau đó sửa dòng `logoUrl: ""` thành `logoUrl: "my-logo.png"` (hoặc đường dẫn tương ứng).
  * **Cách 2:** Nếu bạn chưa có tệp ảnh logo, bạn có thể chỉnh sửa mã SVG trực tiếp trong thuộc tính `logoSvg` để vẽ logo cá nhân bằng code vector.
- **Giới thiệu bản thân:** Sửa đoạn văn bản trong thuộc tính `aboutHtml`. Bạn có thể dùng các thẻ HTML cơ bản như `<p>`, `<strong>`, `<br>`...
- **Mạng xã hội:** Cập nhật link GitHub, LinkedIn... trong `socialLinks`. Link nào để trống hoặc để `"#"` sẽ tự động không hiển thị ngoài trang chủ.

### 2. Quản lý danh sách App/Game (Thêm / Sửa / Xóa)
Tìm mảng `apps` trong file `config.js`. Mỗi ứng dụng là một đối tượng nằm trong `{ ... }`.

Để **thêm một ứng dụng mới** (ví dụ ứng dụng thứ 8):
1. Sao chép toàn bộ khối ứng dụng mẫu (từ dấu mở ngoặc nhọn `{` đến dấu đóng ngoặc nhọn `},` của một app có sẵn).
2. Dán vào ngay phía sau ứng dụng cuối cùng (trước dấu đóng mảng `]`).
3. Sửa đổi các thuộc tính sau:
   - `id`: Định danh duy nhất viết liền không dấu (ví dụ: `my-new-app`). Thuộc tính này sẽ tạo nên link chính sách bảo mật dạng `#privacy/my-new-app`.
   - `name`: Tên đầy đủ của App/Game.
   - `type`: Điền `"app"` (nếu là ứng dụng) hoặc `"game"` (nếu là trò chơi).
   - `logoUrl`: Đường dẫn ảnh icon của app (ví dụ: `assets/my-new-app-logo.png`). Nếu chưa có ảnh, hệ thống sẽ sử dụng mẫu vẽ vector `logoSvg` có sẵn.
   - `shortDescription`: Mô tả ngắn gọn xuất hiện ngoài trang chủ (khoảng 15-20 từ).
   - `description`: Giới thiệu chi tiết sản phẩm hiển thị khi mở hộp thoại xem chi tiết.
   - `features`: Mảng các tính năng nổi bật (hiển thị dạng danh sách tích xanh `✓`).
   - `playStoreUrl` & `appStoreUrl`: Đường dẫn tải về trên Google Play / App Store. Nếu chưa phát hành, hãy để giá trị `"#"` – hệ thống sẽ tự động hiển thị trạng thái **"Sắp phát hành"** (Coming soon) và vô hiệu hóa nút bấm rất chuyên nghiệp.
   - `privacyPolicy`: Nội dung chính sách bảo mật chi tiết của ứng dụng đó. Bạn có thể sử dụng mẫu có sẵn trong file và chỉ cần thay đổi tên ứng dụng/tên dev tương ứng.
   - `termsOfService`: Điều khoản sử dụng chi tiết tương tự.

---

## 🔗 Đường Dẫn Khai Báo Cho Google Play / AdMob / App Store

Khi phát hành ứng dụng hoặc đăng ký AdMob, bạn sẽ cần khai báo các đường dẫn sau:

1. **Trang chủ nhà phát triển (Developer Website):**  
   `https://[username].github.io/[repo-name]/`
2. **File định danh quảng cáo (App-ads.txt URL):**  
   `https://[username].github.io/[repo-name]/app-ads.txt`  
   *(Bạn hãy tạo file `app-ads.txt` ở thư mục gốc và dán mã định danh AdMob của bạn vào)*
3. **Đường dẫn Chính sách bảo mật (Privacy Policy URL) của từng App:**  
   `https://[username].github.io/[repo-name]/#privacy/[app-id]`  
   *(Ví dụ đối với ứng dụng Voto: `https://[username].github.io/[repo-name]/#privacy/voto`)*
4. **Đường dẫn Điều khoản sử dụng (Terms of Service URL) của từng App:**  
   `https://[username].github.io/[repo-name]/#terms/[app-id]`

---

## 🚀 Hướng Dẫn Đẩy Lên GitHub Pages

Để trang web của bạn hoạt động trực tuyến hoàn toàn miễn phí trên GitHub Pages, hãy làm theo các bước sau:

1. Tạo một repository mới trên GitHub (ví dụ đặt tên là `website_github`).
2. Mở Terminal (PowerShell hoặc Git Bash) tại thư mục dự án này và chạy các lệnh sau để đẩy code lên GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initialize portfolio website"
   git branch -M main
   git remote add origin https://github.com/[tên-tài-khoản-github]/website_github.git
   git push -u origin main
   ```
3. Truy cập vào kho chứa (Repository) đó trên trang web GitHub của bạn.
4. Chọn tab **Settings** (Cài đặt) -> tìm đến mục **Pages** ở cột bên trái.
5. Tại mục **Build and deployment**, phần **Source** chọn **Deploy from a branch**.
6. Tại phần **Branch**, chọn nhánh `main` (hoặc `master`) và thư mục `/ (root)` -> bấm **Save**.
7. Đợi khoảng 1-2 phút, GitHub sẽ cung cấp cho bạn một đường liên kết trực tiếp (ví dụ: `https://[username].github.io/website_github/`). 

Chúc bạn có một trang web giới thiệu sản phẩm thật đẹp mắt và thuận lợi vượt qua các đợt kiểm duyệt quảng cáo!