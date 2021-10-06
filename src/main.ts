import { HELLO } from "./hello"

export class Main {
  constructor(private console: Console) {
  }

  public sayHello(helloType: "short" | "long"): void {
    if (helloType === "short") {
      this.console.log("Hi")
    }

    if (helloType === "long") {
      this.console.log(HELLO)
    }
  }
}

const main: Main = new Main(console)

main.sayHello("short")
