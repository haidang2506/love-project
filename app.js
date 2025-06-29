// Hàm xử lý khi người dùng bấm nút "Yes"
function goToLoading() {
    // Ẩn trang câu hỏi
    document.getElementById('page1').style.display = 'none';
    // Hiện phần loading
    document.getElementById('loadingPage').style.display = 'block';
    // Sau 2 giây, chuyển sang trang kết quả
    setTimeout(() => {
        // Ẩn phần loading
        document.getElementById('loadingPage').style.display = 'none';
        // Hiện trang kết quả "I knew it!"
        document.getElementById('resultPage').style.display = 'block';
    }, 2000);
}

// Button No chạy khắp màn hình
const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");

// Gắn sự kiện: khi chuột vừa chạm vào nút "No"
noBtn.addEventListener("mouseenter", () => {
    // Tính chiều rộng tối đa có thể di chuyển theo trục X (ngang)
    // = chiều rộng khung trừ đi chiều rộng của nút
    const maxX = page1.offsetWidth - noBtn.offsetWidth;

    // Tính chiều cao tối đa có thể di chuyển theo trục Y (dọc)
    const maxY = page1.offsetHeight - noBtn.offsetHeight;

    // Di chuyển nút đến vị trí ngẫu nhiên trong phạm vi đó
    // Math.random() * maxX → tạo số ngẫu nhiên từ 0 đến maxX
    noBtn.style.position = "absolute"; // Cho phép di chuyển trong khung
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});

// Hàm xử lý khi người dùng bấm nút "Quay lại"
function goBack() {
    // Ẩn trang kết quả
    document.getElementById('resultPage').style.display = 'none';
    // Ẩn trang loading nếu đang hiển thị
    document.getElementById('loadingPage').style.display = 'none';
    // Hiện lại trang câu hỏi ban đầu
    document.getElementById('page1').style.display = 'block';

    const noBtn = document.getElementById('noBtn');
    // Đặt lại vị trí nút "No" về góc trái trên (vị trí gốc)
    noBtn.style.left = '0';
    noBtn.style.top = '0';

    // Đổi position về "relative" để nút trở về layout bình thường
    noBtn.style.position = 'relative';
}


