
import { getFromStorage, saveToStorage } from './storageUtils';

export class AuthService {
  private authKey = "musafir-auth";
  
  constructor() {
    // Initialize with default state if none exists
    if (!localStorage.getItem(this.authKey)) {
      this.logout();
    }
  }
  
  async login(username: string, password: string): Promise<boolean> {
    // In a real app, this would validate against a backend
    // For demo, accept admin/admin
    if (username === 'admin' && password === 'admin') {
      saveToStorage(this.authKey, {
        isLoggedIn: true,
        isAdmin: true,
        username: username,
        loginTime: new Date().toISOString()
      });
      return true;
    }
    return false;
  }
  
  async logout(): Promise<void> {
    saveToStorage(this.authKey, {
      isLoggedIn: false,
      isAdmin: false,
      username: null,
      loginTime: null
    });
  }
  
  async isLoggedIn(): Promise<boolean> {
    const authData = getFromStorage(this.authKey, { isLoggedIn: false });
    return authData.isLoggedIn === true;
  }
  
  async isAdmin(): Promise<boolean> {
    const authData = getFromStorage(this.authKey, { isAdmin: false });
    return authData.isAdmin === true;
  }
  
  async getUsername(): Promise<string | null> {
    const authData = getFromStorage(this.authKey, { username: null });
    return authData.username;
  }
  
  async getLoginTime(): Promise<string | null> {
    const authData = getFromStorage(this.authKey, { loginTime: null });
    return authData.loginTime;
  }
}
