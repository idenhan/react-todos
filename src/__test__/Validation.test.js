import Validation from "../components/Validation";

test("주민등록번호 검사", () => {
  expect(Validation(910502, 1410116)).toEqual(true);
});
