const Validation = (juminFirst, juminLast) => {
  const jumin = juminFirst + "" + juminLast;
  const compare = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

  let arrJumin = [];
  let sum = 0;

  if (juminFirst === "" || juminLast === "") {
    alert("주민등록번호를 기입해주세요.");
    return false;
  } else if (juminFirst.match("[^0-9]") || juminLast.match("[^0-9]")) {
    alert("주민등록번호는 숫자만 입력하셔야 합니다.");
    return false;
  } else if (jumin.length !== 13) {
    alert("올바른 주민등록번호를 입력해주세요.");
    return false;
  }

  for (let i = 0; i < 13; i++) {
    arrJumin[i] = jumin.substring(i, i + 1);
  }
  for (let i = 0; i < 12; i++) {
    sum = sum + arrJumin[i] * compare[i];
  }

  sum = (11 - (sum % 11)) % 10;

  if (sum !== arrJumin[12]) {
    alert("올바른 주민등록번호를 입력하여 주세요.");
    return false;
  }

  return true;
};

export default Validation;
