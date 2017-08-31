class Helper extends BasicHelper {
  constructor() {
    super();

    browser.storage.sync.set({
      list: ['d1ee0cfe9ee5b644f8f657274631a8e6d67a38c4'],
      blacklistCookies: false,
      blacklistType: null,
      enableContextMenu: true,
      encryption: null,
      matching: null,
      type: null
    });
  }

  async list() {
    let list = await browser.storage.sync.get();

    return list.list;
  }
}