class Options {
  constructor() {
    this.test();
  }

  async test() {
    let data = await browser.runtime.sendMessage({ test: 'test' });

    console.log(data);
  }
}

new Options();