$(document).ready(function(){
    $("#registerForm").submit(function(e){
        $(".error").text(""); // Xóa thông báo cũ
        let valid = true;

        // 1. Tên đăng nhập: bắt đầu bằng chữ, không ký tự đặc biệt, không khoảng trắng
        let user = $("#username").val();
        if(!/^[A-Za-z][A-Za-z0-9]{1,}$/.test(user)){
            $("#errUser").text("Tên đăng nhập phải bắt đầu bằng chữ và không chứa ký tự đặc biệt hoặc khoảng trắng");
            valid = false;
        }

        // 2. Mật khẩu: ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 số, 1 ký tự đặc biệt
        let pass = $("#password").val();
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$/.test(pass)){
            $("#errPass").text("Mật khẩu phải có ít nhất 8 ký tự gồm chữ hoa, chữ thường, số và ký tự đặc biệt");
            valid = false;
        }

        // 3. Nhập lại mật khẩu
        if($("#repassword").val() !== pass){
            $("#errRepass").text("Mật khẩu nhập lại không khớp");
            valid = false;
        }

        // 4. Họ tên: chữ cái đầu viết hoa
        let name = $("#fullname").val();
        if(!/^[A-ZÀ-Ỹ][a-zà-ỹ]*(\\s[A-ZÀ-Ỹ][a-zà-ỹ]*)+$/.test(name)){
            $("#errName").text("Họ tên phải viết hoa chữ cái đầu");
            valid = false;
        }

        // 5. Ngày sinh: phải từ 16 tuổi trở lên
        let dob = new Date($("#dob").val());
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        if(isNaN(dob) || age < 16){
            $("#errDob").text("Tuổi phải từ 16 trở lên");
            valid = false;
        }

        // 6. Địa chỉ
        if($("#address").val().trim() === ""){
            $("#errAddress").text("Địa chỉ không được để trống");
            valid = false;
        }

        // 7. Điện thoại: 09,03,07,06,05 + 8 số
        let phone = $("#phone").val();
        if(!/^(09|03|07|06|05)\\d{8}$/.test(phone)){
            $("#errPhone").text("Số điện thoại không hợp lệ");
            valid = false;
        }

        // 8. Email
        let email = $("#email").val();
        if(!/^[\\w\\.-]+@[\\w\\.-]+\\.\\w+$/.test(email)){
            $("#errEmail").text("Email không hợp lệ");
            valid = false;
        }

        // Ngăn gửi nếu lỗi
        if(!valid) e.preventDefault();
        else alert("Đăng ký thành công!");
    });
});
