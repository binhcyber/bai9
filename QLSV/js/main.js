var dssv = [];
function getElement(ele) {
  return document.getElementById(ele);
}
function setLocal() {
  var dssvJson = JSON.stringify(dssv);
  localStorage.setItem("DSsinhVien", dssvJson);
}
var dssvLocal = localStorage.getItem("DSsinhVien");
var parseLocal = JSON.parse(dssvLocal);
dssv = parseLocal.map(function (sv) {
  return new sinhVien(
    sv.ma,
    sv.ten,
    sv.email,
    sv.mk,
    sv.kh,
    sv.toan,
    sv.ly,
    sv.hoa
  );
});
renderTable(dssv);
function themSinhVien() {
  var ma = getElement("txtMaSV").value;
  var ten = getElement("txtTenSV").value;
  var email = getElement("txtEmail").value;
  var mk = getElement("txtPass").value;
  var kh = getElement("khSV").value;
  var toan = getElement("txtDiemToan").value * 1;
  var ly = getElement("txtDiemLy").value * 1;
  var hoa = getElement("txtDiemHoa").value * 1;
  var sinhvien = new sinhVien(ma, ten, email, mk, kh, toan, ly, hoa);
  flag = [
    kiemTraRong("txtMaSV", "spanMaSV", 0),
    kiemTraRong("txtTenSV", "spanTenSV", 1),
    kiemTraRong("txtEmail", "spanEmailSV", 2),
    kiemTraRong("txtPass", "spanMatKhau", 3),
    kiemTraChucVu("khSV", "spanKhoaHoc", 4),
    kiemTraRong("txtDiemToan", "spanToan", 5),
    kiemTraRong("txtDiemLy", "spanLy", 6),
    kiemTraRong("txtDiemHoa", "spanHoa", 7),
    kiemTraKyTuSo("txtMaSV", "spanMaSV", 8, 0, 10),
    kiemTraKyTuSo("txtDiemToan", "spanToan", 9, 0, 10),
    kiemTraKyTuSo("txtDiemLy", "spanLy", 10, 0, 10),
    kiemTraKyTuSo("txtDiemHoa", "spanHoa", 11, 0, 10),
    kiemTraKyTuChu("txtTenSV", "spanTenSV", 12),
    kiemTraEmail("txtEmail", "spanEmailSV", 13),
  ];
  for (i = 0; i < flag.length; i++) {
    var check = flag[i];
    if (!check) {
      return false;
    }
  }
  dssv.push(sinhvien);
  console.log(dssv);
  renderTable(dssv);
  setLocal();
  getElement("formQLSV").reset();
}
function timKiemSV(maSV) {
  for (i = 0; i < dssv.length; i++) {
    if (dssv[i].ma * 1 === maSV * 1) {
      return i;
    }
  }
}
function xoaSV(maSV) {
  var index = timKiemSV(maSV);
  dssv.splice(index, 1);
  renderTable(dssv);
  setLocal();
}
function suaSV(maSV) {
  var index = timKiemSV(maSV);
  sv = dssv[index];
  getElement("txtMaSV").value = sv.ma;
  getElement("txtTenSV").value = sv.ten;
  getElement("txtEmail").value = sv.email;
  getElement("txtPass").value = sv.mk;
  getElement("khSV").value = sv.kh;
  getElement("txtDiemToan").value = sv.toan;
  getElement("txtDiemLy").value = sv.ly;
  getElement("txtDiemHoa").value = sv.hoa;
}
function capNhat() {
  var ma = getElement("txtMaSV").value;
  var ten = getElement("txtTenSV").value;
  var email = getElement("txtEmail").value;
  var mk = getElement("txtPass").value;
  var kh = getElement("khSV").value;
  var toan = getElement("txtDiemToan").value * 1;
  var ly = getElement("txtDiemLy").value * 1;
  var hoa = getElement("txtDiemHoa").value * 1;
  var index = timKiemSV(ma);
  dssv[index] = new sinhVien(ma, ten, email, mk, kh, toan, ly, hoa);
  flag = [
    kiemTraRong("txtMaSV", "spanMaSV", 0),
    kiemTraRong("txtTenSV", "spanTenSV", 1),
    kiemTraRong("txtEmail", "spanEmailSV", 2),
    kiemTraRong("txtPass", "spanMatKhau", 3),
    kiemTraChucVu("khSV", "spanKhoaHoc", 4),
    kiemTraRong("txtDiemToan", "spanToan", 5),
    kiemTraRong("txtDiemLy", "spanLy", 6),
    kiemTraRong("txtDiemHoa", "spanHoa", 7),
    kiemTraKyTuSo("txtMaSV", "spanMaSV", 8, 0, 10),
    kiemTraKyTuSo("txtDiemToan", "spanToan", 9, 0, 10),
    kiemTraKyTuSo("txtDiemLy", "spanLy", 10, 0, 10),
    kiemTraKyTuSo("txtDiemHoa", "spanHoa", 11, 0, 10),
    kiemTraKyTuChu("txtTenSV", "spanTenSV", 12),
    kiemTraEmail("txtEmail", "spanEmailSV", 13),
  ];
  for (i = 0; i < flag.length; i++) {
    var check = flag[i];
    if (!check) {
      return false;
    }
  }

  renderTable(dssv);
  setLocal();
  getElement("formQLSV");
}
function timKiemSV(maSV) {
  for (i = 0; i < dssv.length; i++) {
    if (dssv[i].ma * 1 === maSV * 1) {
      return i;
    }
  }
  renderTable(dssv);
}
function timKiem(Ten) {
  var count = [];
  for (i = 0; i < dssv.length; i++) {
    if (dssv[i].ten.search(Ten) != -1) {
      count.push(dssv[i]);
    }
  }
  console.log(count);
  return count;
}

function timkiemsv() {
  var Ten = getElement("txtSearch").value;
  var svTimKiem = timKiem(Ten);
  renderTable(svTimKiem);
}
function timkiem111() {
  var Ten = getElement("txtSearch").value;
  var svTimKiem = timKiem(Ten);
  renderTable(svTimKiem);
}
function reset() {
  getElement("formQLSV").reset();
  getElement("tbodySinhVien").innerHTML = "";
}
function renderTable(array) {
  var contentHTML = "";
  for (i = 0; i < array.length; i++) {
    var sv = array[i];
    contentHTML += `<tr>
        <td>${sv.ma}</td>
        <td>${sv.ten}</td>
        <td>${sv.email}</td>
        <td>${sv.kh}</td>
        <td>${sv.DTB()}</td>
        <td><button class ="btn btn-danger" onclick = xoaSV(${
          sv.ma
        })>Xóa</button></td>
        <td><button class ="btn btn-warning" onclick = suaSV(${
          sv.ma
        })>Sửa</button></td>
        </tr>`;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
