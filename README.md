Day 25: Bài tập về nhà
Cập nhật tháng 6 năm 2025

# Yêu cầu chung

# Bài tập

# 1. Xây dựng chức năng check all

# 2. Xây dựng chức năng Tab

# 3. Xây dựng chức năng slideshow

# Yêu cầu chung

-   Đặt tên dự án và repo là f8-zoom-day-25, gồm file index.html link về các file bài tập tương ứng.
-   Toàn bộ các chức năng viết bằng JavaScript cần tái sử dụng được. VD: - Làm chức năng Tab thì khi có nhiều tab khác nhau vẫn hoạt động và không có lỗi, mỗi tab hoạt động chính xác một cách độc lập mà không phụ thuộc nhau.

# Bài tập

# 1. Xây dựng chức năng check all

-   Tạo file check-all.html có giao diện là một danh sách ~ 10 rows, ô đầu tiên trong mỗi row là 1 checkbox mặc định không check.
-   Thêm 1 checkbox phía trên checkbox đầu tiên (Checkbox chính).
-   Mặc định không check, khi click vào toàn bộ các checkbox sẽ check, khi bỏ check toàn bộ checkbox sẽ bỏ check.
-   Khi có ít nhất 1 checkbox được check nhưng không phải toàn bộ, khi đó check box chính thay vì hiển thị dấu check, sẽ hiển thị dấu gạch ngang (checkAllElement.indeterminate = true hoặc tự custom checkbox).
-   Hiển thị tổng số row đang được check. 
-   Tham khảo: Từ khóa tìm kiếm trên Google hình ảnh “Checkbox select all UI”.

# 2. Xây dựng chức năng Tab

-   Tạo file tabs.html có giao diện dạng tabs, gồm ít nhất 3 tab items và content tương ứng.
-   Mặc định active ở tab đầu tiên, nhưng có thể thay đổi bằng cách đặt class active vào tab khác. VD: Để sẵn class active trong tab 2 thì khi tải trang mặc định active ở tab 2.
-   Click vào tab nào thì active tab đó, bỏ active của tab trước đó.
-   Nhấn số tương ứng trên bàn phím sẽ active tab tương ứng. VD: Nhấn 1 sẽ active tab 1, nhấn 5 sẽ active tab 5 (nếu có).

# 3. Xây dựng chức năng slideshow

-   Tạo file slideshow.html có giao diện slideshow, gồm ít nhất 6 slide item với các hình ảnh được tải về đặt trong thư mục dự án. 
-   Hiển thị 1 slide item trên mỗi trang (tức 1 slide hiển thị full slide luôn, next slide thì slide cũ sẽ rời khỏi, slide mới sẽ hiển thị thay thế. Chứ không phải dạng hiển thị nhiều slide item trên cùng 1 trang).
-   Thêm 2 button next và prev, mỗi lần click sẽ tiến hoặc lùi slide tương ứng với timing function ease.
-   Khi click prev trên slide đầu tiên thì sẽ chuyển tới slide cuối nhưng với hiệu ứng tiếp tục chạy theo hướng lùi, chứ không phải là chạy ngược lại. Tương tự, khi click next trên slide cuối sẽ tới slide đầu tiên với hiệu ứng đi tiếp.
-   Khi click liên tục vào prev hoặc next với tốc độ nhanh hơn duration của hiệu ứng slide có thể gây ra lỗi giật UI, hãy fix nó.
-   Xử lý autoplay (tự động next) mỗi 3000ms, khi hover vào slide thì sẽ pause, bỏ hover lại tiếp tục autoplay.
-   Thêm pagination (các chấm tròn) phía dưới slideshow thể hiện slide hiện tại đang ở. VD: Có tổng 5 slide items sẽ có 5 chấm tròn, slide hiện tại là slide thứ 3 thì chấm tròn số 3 sẽ active (có thể style cho nó đen hơn các chấm còn lại…).
