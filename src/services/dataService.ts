
import { PGS, ROOMMATES, PG, Roommate } from '../data/mockData';

export type { PG, Roommate };

export interface SavedItem {
  id: number;
  itemId: number;
  type: 'pg' | 'roommate';
}

export interface CompareItem {
  id: number;
  itemId: number;
  type: 'pg' | 'roommate';
}

class DataService {
  private getStorage<T>(key: string): T[] {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.error(`Error reading ${key} from localStorage`, e);
      return [];
    }
  }

  private setStorage<T>(key: string, data: T[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error(`Error writing ${key} to localStorage`, e);
    }
  }

  async getPgs(filter?: { gender?: string }): Promise<PG[]> {
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        let data = PGS;
        if (filter?.gender) {
          data = data.filter(pg => pg.gender === filter.gender);
        }
        resolve(data);
      }, 300);
    });
  }

  async getRoommates(filter?: { gender?: string }): Promise<Roommate[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data = ROOMMATES;
        if (filter?.gender) {
          data = data.filter(r => r.gender === filter.gender);
        }
        resolve(data);
      }, 300);
    });
  }

  async getSavedItems(): Promise<SavedItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getStorage<SavedItem>('saved_items')), 200);
    });
  }

  async toggleSave(itemId: number, type: 'pg' | 'roommate'): Promise<{ success: boolean; action: 'added' | 'removed' }> {
    return new Promise((resolve) => {
      const saved = this.getStorage<SavedItem>('saved_items');
      const existingIndex = saved.findIndex(i => i.itemId === itemId && i.type === type);
      
      let action: 'added' | 'removed';
      if (existingIndex >= 0) {
        saved.splice(existingIndex, 1);
        action = 'removed';
      } else {
        saved.push({ id: Date.now(), itemId, type });
        action = 'added';
      }
      
      this.setStorage('saved_items', saved);
      resolve({ success: true, action });
    });
  }

  async getCompareItems(): Promise<CompareItem[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.getStorage<CompareItem>('compare_items')), 200);
    });
  }

  async toggleCompare(itemId: number, type: 'pg' | 'roommate'): Promise<{ success: boolean; action: 'added' | 'removed'; error?: string }> {
    return new Promise((resolve) => {
      const compared = this.getStorage<CompareItem>('compare_items');
      const existingIndex = compared.findIndex(i => i.itemId === itemId && i.type === type);
      
      let action: 'added' | 'removed';
      if (existingIndex >= 0) {
        compared.splice(existingIndex, 1);
        action = 'removed';
      } else {
        // Check limit
        const typeCount = compared.filter(i => i.type === type).length;
        if (typeCount >= 3) {
          resolve({ success: false, action: 'added', error: 'Max 3 items allowed for comparison' });
          return;
        }
        compared.push({ id: Date.now(), itemId, type });
        action = 'added';
      }
      
      this.setStorage('compare_items', compared);
      resolve({ success: true, action });
    });
  }
}

export const dataService = new DataService();
