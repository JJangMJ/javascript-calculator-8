import { Console } from "@woowacourse/mission-utils";
import { add } from "./StringCalculator.js";

class App {
  async run() {
    try {
      Console.print("덧셈할 문자열을 입력해 주세요.");
      const input = await Console.readLineAsync("");
      const result = add(input);
      Console.print(`결과 : ${result}`);
    } catch (error) {
      const message =
        error?.message ?? "[ERROR] 알 수 없는 오류가 발생했습니다.";
      Console.print(message);
      throw error;
    }
  }
}

export default App;
