import React, { useState } from "react";

const ValidationForm = () => {
  const [juminFirst, setJuminFirst] = useState("");
  const [juminLast, setJuminLast] = useState("");

  const handleJuminFirstChange = e => {
    setJuminFirst(e.target.value);
  };

  const handleJuminLastChange = e => {
    setJuminLast(e.target.value);
  };

  const handleClick = () => {
    validation();

    if (validation()) {
      alert("올바른 주민등록번호입니다.");
    } else {
      alert("입력한 번호를 다시 확인하시기 바랍니다.");
    }
  };

  const validation = () => {
    const jumin = juminFirst + juminLast;

    const fmt = /^\d{6}[1234]\d{6}$/;
    if (!fmt.test(jumin)) {
      return false;
    }

    let birthYear = jumin.charAt(6) <= "2" ? "19" : "20";
    birthYear += jumin.substr(0, 2);

    const birthMonth = jumin.substr(2, 2) - 1;
    const birthDate = jumin.substr(4, 2);
    const birth = new Date(birthYear, birthMonth, birthDate);

    if (birth.getMonth() !== birthMonth) {
      return false;
    }

    let buf = new Array(13);
    let sum = 0;
    const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

    for (let i = 0; i < 13; i++) buf[i] = parseInt(jumin.charAt(i));

    for (let i = 0; i < 12; i++) sum += buf[i] *= multipliers[i];

    if ((11 - (sum % 11)) % 10 !== buf[12]) {
      return false;
    }

    return true;
  };

  return (
    <form className="vali-form">
      <div>
        <input
          type="text"
          className="vali-input"
          placeholder="주민번호 앞 6자리"
          required
          value={juminFirst}
          onChange={handleJuminFirstChange}
        />
        <span className="gap">-</span>
        <input
          type="text"
          className="vali-input"
          placeholder="주민번호 뒷 7자리"
          required
          value={juminLast}
          onChange={handleJuminLastChange}
        />
      </div>
      <div className="buttons">
        <button
          type="submit"
          className="btn check-btn"
          onClick={() => handleClick()}
        >
          <i class="fas fa-check-circle"></i>
          Check
        </button>
      </div>
    </form>
  );
};

export default ValidationForm;
