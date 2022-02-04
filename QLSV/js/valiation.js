var checkmess = [
  "Vui lòng nhập mã",
  "Vui lòng nhập tên",
  "Vui lòng nhập email",
  "Vui lòng nhập mật khẩu",
  "Vui lòng chọn khóa học",
  "Vui lòng nhập điểm toán",
  "Vui lòng nhập điểm lý",
  "Vui lòng nhập điểm hóa",
  "Mã không hợp lệ (mã từ 0 - đến 10)",
  "Điểm toán không hợp lệ (toán từ 0 - đến 10)",
  "Điểm lý không hợp lệ (lý từ 0 - đến 10)",
  "Điểm hóa không hợp lệ (hóa từ 0 - đến 10)",
  "Vui lòng nhập tên là chữ",
  "Email không hợp lệ",
];
function getEle(ele) {
  return document.getElementById(ele);
}
function kiemTraRong(idInput, idSpan, IndexCheckMess) {
  var flag = true;
  var inputValue = getEle(idInput).value;
  var spanValue = getEle(idSpan);
  if (inputValue === "") {
    spanValue.style.display = "block";
    spanValue.style.color = "red";
    spanValue.innerHTML = checkmess[IndexCheckMess];
    flag = false;
  } else {
    spanValue.style.display = "none";
    flag = true;
  }
  return flag;
}
function kiemTraChucVu(idInput, idSpan, IndexCheckMess) {
  var flag = true;
  var inputValue = getEle(idInput).value;
  var spanValue = getEle(idSpan);
  if (inputValue == "Chọn khóa học") {
    spanValue.style.display = "block";
    spanValue.style.color = "red";
    spanValue.innerHTML = checkmess[IndexCheckMess];
    flag = false;
  } else {
    spanValue.style.display = "none";
    flag = true;
  }
  return flag;
}
function kiemTraKyTuSo(idInput, idSpan, IndexCheckMess, minLength, maxLength) {
  var flag = true;
  var num = /^\d+$/;
  var inputValue = getEle(idInput).value;
  var spanValue = getEle(idSpan);
  if (
    inputValue.match(num) &&
    inputValue >= minLength &&
    inputValue <= maxLength
  ) {
    spanValue.style.display = "none";
    flag = true;
  } else {
    spanValue.style.display = "block";
    spanValue.style.color = "red";
    spanValue.innerHTML = checkmess[IndexCheckMess];
    flag = false;
  }
  return flag;
}
function kiemTraKyTuChu(idInput, idSpan, IndexCheckMess) {
  var flag = true;
  var letters = /^[A-Za-z ]+$/;
  var inputValue = getEle(idInput).value;
  var spanValue = getEle(idSpan);
  if (!inputValue.match(letters)) {
    spanValue.style.display = "block";
    spanValue.style.color = "red";
    spanValue.innerHTML = checkmess[IndexCheckMess];
    flag = false;
  } else {
    spanValue.style.display = "none";
    flag = true;
  }
  return flag;
}

function kiemTraEmail(idInput, idSpan, IndexCheckMess) {
  var flag = true;
  var email =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var inputValue = getEle(idInput).value;
  var spanValue = getEle(idSpan);
  if (!inputValue.match(email)) {
    spanValue.style.display = "block";
    spanValue.style.color = "red";
    spanValue.innerHTML = checkmess[IndexCheckMess];
    flag = false;
  } else {
    spanValue.style.display = "none";
    flag = true;
  }
  return flag;
}
