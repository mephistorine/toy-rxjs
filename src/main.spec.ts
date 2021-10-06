import { Main } from "./main"

describe("Main", () => {
  it("should log Hi when using short version", () => {
    const fakeConsole: Pick<Console, 'log'> = {
      log: (message: string) => {
        expect(message).toBe("Hi")
      }
    }

    const main: Main = new Main(fakeConsole as Console)
    main.sayHello("short")
  })
})
