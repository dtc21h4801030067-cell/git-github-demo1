# Dự án quản lý mã nguồn với GitHub

Dự án mẫu phục vụ báo cáo **Quản lý mã nguồn với Git & GitHub**.

## Cách chạy
Mở file `index.html` bằng trình duyệt hoặc dùng Live Server trong Visual Studio Code.

## Khởi tạo Git
```bash
git init
git branch -M main
git add .
git commit -m "chore: khoi tao du an"
git remote add origin https://github.com/TEN_TAI_KHOAN/git-github-demo.git
git push -u origin main
```

## Thực hành branch
```bash
git switch -c feature/task-list
git add .
git commit -m "feat: them danh sach cong viec"
git push -u origin feature/task-list
```

Sau đó tạo Pull Request trên GitHub.
