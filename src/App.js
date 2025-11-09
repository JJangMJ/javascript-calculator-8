import { readString } from "./view/InputView.js";
import { printResult } from "./view/OutputView.js";
import { add } from "./StringCalculator.js";

class App {
  async run() {
    const input = await readString();
    const result = add(input);
    printResult(result);
  }
}

export default App;
