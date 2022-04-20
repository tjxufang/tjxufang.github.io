import { LocalStorageItems } from './constants';

export default class LocalStorage {
  static setObjectItem(itemName, obj) {
    localStorage.setItem(itemName, JSON.stringify(obj));
  }

  static getObjectItem(itemName) {
    const content = localStorage.getItem(itemName);
    if (content) {
      return JSON.parse(content);
    }
    return undefined;
  }

  static getToken() {
    return localStorage.getItem(LocalStorageItems.Token);
  }

  static setToken(token) {
    return localStorage.setItem(LocalStorageItems.Token, token);
  }

  static getItem(itemName) {
    return localStorage.getItem(itemName);
  }

  static setItem(itemName, value) {
    localStorage.setItem(itemName, value);
  }

  static removeItem(itemName) {
    localStorage.removeItem(itemName);
  }
}
