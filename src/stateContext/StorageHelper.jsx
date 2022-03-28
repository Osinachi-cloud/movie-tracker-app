
   
class StorageHelper {
    static saveItem(itemKey, item) {
      localStorage.setItem(itemKey, JSON.stringify(item));
    }
  
    static getItem(itemKey) {
      return JSON.parse(localStorage.getItem(itemKey));
    }
  
    static deleteItem(itemKey) {
      localStorage.removeItem(itemKey);
    }
  
    static clearStorage() {
      localStorage.clear();
    }
  }
  
  export default StorageHelper;
  