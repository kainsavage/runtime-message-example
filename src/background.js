class Background {
  constructor() {
    this.createHelper();
    this.createFunctionBindings();
    this.attachEventListeners();

    console.log('constructor');
  }

  async createHelper() {
    this.helper = new Helper();
  }

  createFunctionBindings() {
    this.onMessage = this.onMessage.bind(this);
  }

  attachEventListeners() {
    browser.runtime.onMessage.addListener(this.onMessage);
  }

  onMessage(message, sender, sendResponse) {
    switch ("test") {
      case "test":
        this.helper.list().then(data => sendResponse(data));
        return true;
      case "nottest":
        return false;
    }
  }
}

new Background();