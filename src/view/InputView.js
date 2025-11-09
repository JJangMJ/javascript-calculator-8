import { Console } from "@woowacourse/mission-utils";

export async function readString() {
  Console.print("덧셈할 문자열을 입력해 주세요.");
  const input = await Console.readLineAsync("");
  return input;
}
