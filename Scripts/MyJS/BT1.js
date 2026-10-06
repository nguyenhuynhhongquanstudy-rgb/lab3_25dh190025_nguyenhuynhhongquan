function capNhatSoTruong() {
    var cn = document.getElementById("chuyenNganh").value;
    var st = document.getElementById("soTruong");
    if (cn == "HeThong") {
        st.value = "Phân tích và Thiết kế";
    } else if (cn == "PhanMem") {
        st.value = "Lập trình";
    } else if (cn == "MangMayTinh") {
        st.value = "Quản lý mạng";
    } else {
        st.value = "";
    }
}

function kiemTraVaDangKy() {
    document.getElementById("errMaSV").innerHTML = "";
    document.getElementById("errHoTen").innerHTML = "";
    document.getElementById("errTuoi").innerHTML = "";
    document.getElementById("errNgoaiNgu").innerHTML = "";
    document.getElementById("errChuyenNganh").innerHTML = "";
    document.getElementById("thongBaoChung").innerHTML = "";

    var hopLe = true;

    var maSV = document.getElementById("maSV").value;
    if (maSV.length != 10) {
        document.getElementById("errMaSV").innerHTML = "Mã sinh viên gồm 10 ký tự";
        hopLe = false;
    }

    var hoTen = document.getElementById("hoTen").value;
    if (hoTen == "" || hoTen.length >= 30) {
        document.getElementById("errHoTen").innerHTML = "Họ tên không rỗng và < 30 ký tự";
        hopLe = false;
    }

    var tuoi = document.getElementById("tuoi").value;
    if (isNaN(tuoi) || tuoi == "" || parseInt(tuoi) < 18) {
        document.getElementById("errTuoi").innerHTML = "Tuổi phải 18 trở lên";
        hopLe = false;
    }

    var cn = document.getElementById("chuyenNganh").value;
    if (cn == "") {
        document.getElementById("errChuyenNganh").innerHTML = "Chọn chuyên ngành";
        hopLe = false;
    }

    var cbs = document.getElementsByName("ngoaiNgu");
    var dem = 0;
    var chuoiNN = "";
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].checked) {
            dem++;
            if (chuoiNN == "") {
                chuoiNN = cbs[i].value;
            } else {
                chuoiNN = chuoiNN + " và " + cbs[i].value;
            }
        }
    }

    if (dem == 0 || dem > 2) {
        document.getElementById("errNgoaiNgu").innerHTML = "Chọn tối đa 2 ngoại ngữ";
        hopLe = false;
    } else {
        document.getElementById("errNgoaiNgu").innerHTML = chuoiNN;
    }

    if (hopLe == true) {
        document.getElementById("thongBaoChung").innerHTML = "Bạn đã đăng ký thành công";
    } else {
        document.getElementById("thongBaoChung").innerHTML = "Bạn phải nhập lại cho đúng";
    }
}