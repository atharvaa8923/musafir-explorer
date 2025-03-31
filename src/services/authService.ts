
import { saveToStorage, getFromStorage } from './storageUtils';

export class AuthService {
  private adminKey = "musafir-admin";
  private adminCredentials = { username: "admin", password: "musafir123" };

  async isAdmin(): Promise<boolean> {
    return getFromStorage(this.adminKey, 'false') === 'true';
  }

  async login(username: string, password: string): Promise<boolean> {
    if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
      saveToStorage(this.adminKey, 'true');
      return true;
    }
    return false;
  }

  async logout(): Promise<void> {
    localStorage.removeItem(this.adminKey);
  }
}
