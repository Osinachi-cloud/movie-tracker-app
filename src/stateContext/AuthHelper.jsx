class AuthHelper {
    static saveUserDetails(details) {
      localStorage.setItem('user-details', JSON.stringify(details || {}));
    }
  
    static getUserDetails() {
      return JSON.parse(localStorage.getItem('user-details')) || {};
    }
  
    static isLoggedIn() {
      return !!AuthHelper.getUserDetails().token;
    }
  
    static deleteUserDetails() {
      localStorage.removeItem('user-details');
    }
  
    static logout() {
      localStorage.clear();
    }
  }
  
  export default AuthHelper;